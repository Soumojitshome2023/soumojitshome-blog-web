# Batch Script to Rename Files

## Description
This script renames all files in the current directory to a new format with a specified prefix followed by a sequential number and retains their original extensions. For example, if the prefix is set to `newname`, the files will be renamed as `newname1.ext`, `newname2.ext`, and so on, where `.ext` is the original file extension.

## Usage Instructions

### Prerequisites
- Ensure that you have the files you want to rename in the same directory as the script.

### Steps to Use the Script
1. **Create the Batch Script**:
   - Open Notepad.
   - Copy the following script:

     ```batch
      @echo off
      setlocal enabledelayedexpansion
      
      REM Set the prefix for the new filenames
      set prefix=newname
      
      REM Set the starting number for the sequence
      set /a num=1
      
      REM Change directory to the folder containing the files
      cd /d "%~dp0"
      
      REM Loop through all files in the directory
      for %%f in (*.*) do (
          REM Get the file extension
          set "filename=%%~nf"
          set "ext=%%~xf"
          
          REM Check if the file extension is not .bat
          if /i not "%%~xf"==".bat" (
              REM Generate the new filename
              set "newname=%prefix%!num!!ext!"
              
              REM Rename the file
              ren "%%f" "!newname!"
              
              REM Increment the counter
              set /a num+=1
          )
      )
      
      echo All files except .bat files have been renamed.
      pause

     ```

   - Save it as `rename_files.bat` in the directory where your files are located.

2. **Run the Batch Script**:
   - Double-click the `rename_files.bat` file.
   - The script will rename all files in the directory according to the specified prefix and sequence number.
   - After the script completes, a message saying "All files have been renamed." will appear.
   - Press any key to close the command prompt window.

## Notes
- The script uses delayed variable expansion to handle the sequential numbering correctly.
- The script assumes all files are in the same directory as the batch file.

## Troubleshooting
- If the script does not run as expected, ensure that:
  - The batch file is saved in the correct directory.
  - There are files in the directory.
  - You have the necessary permissions to rename files in the directory.

## Example
Before running the script:


```
image1.jpg
document.txt
example.png
```


After running the script:

```
newname1.jpg
newname2.txt
newname3.png
```
