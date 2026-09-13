import re

with open('C:/Users/Sanyam/OneDrive/Desktop/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract script blocks
scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Total inline scripts found: {len(scripts)}")

for s_idx, code in enumerate(scripts):
    print(f"\n--- Checking Script #{s_idx + 1} (Length: {len(code)} chars) ---")
    
    # State machine parser that handles strings (single, double, template with nesting),
    # comments (single line, multi line), and regex literals.
    stack = []
    i = 0
    line_no = 1
    col_no = 1
    errors = []
    
    while i < len(code):
        ch = code[i]
        
        if ch == '\n':
            line_no += 1
            col_no = 1
            i += 1
            continue
            
        # Single line comment
        if ch == '/' and i + 1 < len(code) and code[i + 1] == '/':
            i += 2
            while i < len(code) and code[i] != '\n':
                i += 1
            continue
            
        # Multi line comment
        if ch == '/' and i + 1 < len(code) and code[i + 1] == '*':
            i += 2
            start_l, start_c = line_no, col_no
            closed = False
            while i + 1 < len(code):
                if code[i] == '\n':
                    line_no += 1
                if code[i] == '*' and code[i + 1] == '/':
                    i += 2
                    closed = True
                    break
                i += 1
            if not closed:
                errors.append(f"Unclosed multiline comment starting at {start_l}:{start_c}")
            continue
            
        # Strings (' or ")
        if ch in ("'", '"'):
            quote = ch
            start_l, start_c = line_no, col_no
            i += 1
            closed = False
            while i < len(code):
                if code[i] == '\n':
                    errors.append(f"Newline inside string literal {quote} at {start_l}:{start_c}")
                    break
                if code[i] == '\\':
                    i += 2 # skip escape
                    continue
                if code[i] == quote:
                    i += 1
                    closed = True
                    break
                i += 1
            if not closed:
                errors.append(f"Unclosed string {quote} starting at {start_l}:{start_c}")
            continue
            
        # Template literals (`)
        if ch == '`':
            start_l, start_c = line_no, col_no
            i += 1
            closed = False
            while i < len(code):
                if code[i] == '\n':
                    line_no += 1
                if code[i] == '\\':
                    i += 2
                    continue
                if code[i] == '$' and i + 1 < len(code) and code[i + 1] == '{':
                    # nested expression inside template
                    stack.append(('}', line_no, col_no, 'template_expr'))
                    i += 2
                    break # exit template literal parsing to parse expression inside
                if code[i] == '`':
                    i += 1
                    closed = True
                    break
                i += 1
            if not closed and (not stack or stack[-1][3] != 'template_expr'):
                errors.append(f"Unclosed template literal ` starting at {start_l}:{start_c}")
            continue

        # Regex literals (heuristic: preceded by = ( [ , : ! ? & | ; { )
        if ch == '/':
            # Check preceding non-whitespace character
            prev_idx = i - 1
            while prev_idx >= 0 and code[prev_idx] in ' \t\r\n':
                prev_idx -= 1
            prev_ch = code[prev_idx] if prev_idx >= 0 else ''
            if prev_ch in '=([,:!?&|;{}+-~':
                # It's a regex literal
                i += 1
                in_bracket = False
                while i < len(code) and code[i] != '\n':
                    if code[i] == '\\':
                        i += 2
                        continue
                    if code[i] == '[':
                        in_bracket = True
                    elif code[i] == ']':
                        in_bracket = False
                    elif code[i] == '/' and not in_bracket:
                        i += 1
                        # flags
                        while i < len(code) and code[i] in 'gimsuy':
                            i += 1
                        break
                    i += 1
                continue

        # Braces & Parentheses
        if ch in '({[':
            stack.append((ch, line_no, col_no, 'bracket'))
        elif ch in ')}]':
            if not stack:
                errors.append(f"Unexpected closing {ch} at {line_no}:{col_no}")
            else:
                top_ch, top_l, top_c, kind = stack[-1]
                if kind == 'template_expr' and ch == '}':
                    stack.pop()
                    # Resume template literal
                    while i < len(code):
                        if code[i] == '\n':
                            line_no += 1
                        if code[i] == '\\':
                            i += 2
                            continue
                        if code[i] == '$' and i + 1 < len(code) and code[i + 1] == '{':
                            stack.append(('}', line_no, col_no, 'template_expr'))
                            i += 2
                            break
                        if code[i] == '`':
                            i += 1
                            break
                        i += 1
                    continue
                else:
                    expected = {'(': ')', '{': '}', '[': ']'}.get(top_ch)
                    if ch == expected:
                        stack.pop()
                    else:
                        errors.append(f"Mismatched bracket: opened {top_ch} at {top_l}:{top_c}, closed with {ch} at {line_no}:{col_no}")
                        
        i += 1

    if stack:
        for top_ch, l, c, kind in stack:
            errors.append(f"Unclosed {top_ch} ({kind}) at {l}:{c}")
            
    if errors:
        print(f"FAILED! {len(errors)} error(s) found:")
        for err in errors[:10]:
            print("  ", err)
    else:
        print("PASSED! 0 syntax errors. Clean and valid.")
