$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
$pres = $ppt.Presentations.Open("C:\Users\Sanyam\OneDrive\Desktop\SIH_2026_Winning_Presentation.pptx")
$outDir = "C:\Users\Sanyam\.gemini\antigravity-ide\scratch\slides_png"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}
$pres.SaveAs($outDir, 17)
$pres.Close()
$ppt.Quit()
Write-Output "SUCCESS: Slides exported to PNG"
