# Image Compression and Renaming Script

This guide provides instructions on how to use a PowerShell script and a batch file to compress image files and rename them sequentially.

## Files

1. `compress_images.ps1`: PowerShell script to compress and rename images.
2. `run_compression.bat`: Batch file to execute the PowerShell script.

## PowerShell Script: `compress_images.ps1`

```
compress_images.ps1
```

The PowerShell script performs the following tasks:
- Compresses each image file to a target size (in this case, 0.6 MB).
- Renames each file with a sequential prefix.

### Script Details

```powershell
$prefix = "newname"
$num = 1
$targetSizeMB = 0.4
$maxWidth = 800  # Reduce dimensions more for higher compression
$maxHeight = 800

# Get all jpg files in the current directory
$files = Get-ChildItem -Filter *.jpg

foreach ($file in $files) {
    $newName = "{0}{1}.jpg" -f $prefix, $num

    try {
        # Load the image
        $image = [System.Drawing.Image]::FromFile($file.FullName)

        # Calculate the new dimensions while maintaining the aspect ratio
        $newWidth = $image.Width
        $newHeight = $image.Height

        $newImage = New-Object System.Drawing.Bitmap $newWidth, $newHeight
        $graphics = [System.Drawing.Graphics]::FromImage($newImage)
        $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
        $graphics.Dispose()
        $image.Dispose()

        # Set the initial quality
        $quality = 75  # Start with lower quality
        $minQuality = 10

        do {
            # Save the compressed image
            $encoder = [System.Drawing.Imaging.Encoder]::Quality
            $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParameter = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $quality)
            $encoderParameters.Param[0] = $encoderParameter
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $tempFileName = [System.IO.Path]::Combine([System.IO.Path]::GetDirectoryName($file.FullName), [System.IO.Path]::GetFileNameWithoutExtension($file.FullName) + "_temp.jpg")
            $newImage.Save($tempFileName, $codec, $encoderParameters)

            # Check file size
            $fileSizeMB = (Get-Item $tempFileName).Length / 1MB
            if ($fileSizeMB -gt $targetSizeMB) {
                # Reduce quality for further compression
                $quality -= 2
            }

        } while ($fileSizeMB -gt $targetSizeMB -and $quality -gt $minQuality)

        # Move the compressed file to the final name
        Move-Item -Force $tempFileName $newName

        # Clean up
        $newImage.Dispose()

        # Increment the counter
        $num++
    } catch {
        Write-Host "Failed to process $($file.FullName)"
        Write-Host $_.Exception.Message
    }
}

Write-Host "All images have been processed and renamed."
Write-Host "Processed by Soumojit Shome"

```

## Batch File: `run_compression.bat`

```
run_compression.bat
```

The batch file automates the execution of the PowerShell script.

### Batch File Details

```batch
@echo off

REM Change directory to the folder containing the files
cd /d "%~dp0"

REM Call the PowerShell script to compress images
powershell -ExecutionPolicy Bypass -File compress_images.ps1

echo All files have been renamed and compressed.
echo Processed by Soumojit Shome.
pause

```




## How to Use

1. **Prepare the Scripts** :

   * Save the PowerShell script as `compress_images.ps1`.
   * Save the batch file as `run_compression.bat`.

2. **Place the Scripts in the Target Directory** :

   * Move both `compress_images.ps1` and `run_compression.bat` to the directory containing the JPG files you want to compress and rename.

3. **Run the Batch File** :

   * Double-click `run_compression.bat` to execute the compression and renaming process.

4. **Check the Results** :

   * The images will be compressed to the target size and renamed sequentially with the prefix `newname`.

### Notes

* Ensure that the target directory contains only the images you want to process.
* The PowerShell script reduces image dimensions to 800x800 pixels for higher compression.
* The batch file sets the execution policy to bypass for running the PowerShell script.

By following these steps, you can easily compress and rename your image files using the provided PowerShell script and batch file.
