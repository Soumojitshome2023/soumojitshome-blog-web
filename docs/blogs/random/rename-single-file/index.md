# How to Rename a Single File

This guide provides step-by-step instructions on how to rename a single file using the Command Prompt (`cmd`) and the `ren` command in Windows.

#### Step-by-Step Instructions

1. **Open Command Prompt** :

   * Press `Win + R`, type `cmd`, and press Enter to open the Command Prompt.
2. **Navigate to the Directory** :

   * Use the `cd` command to navigate to the directory containing the file you want to rename.
   * Example:

   ```
   cd C:\Users\YourUsername\Documents
   ```
3. **Rename the File** :

   * Use the `ren` command with the syntax `ren [old_filename] [new_filename]`.
   * Example:

   ```
   ren oldfile.txt newfile.txt
   ```

#### Example

To rename `example.txt` to `example_renamed.txt` in the `Documents` folder:

1. Open Command Prompt.
2. Navigate to the `Documents` folder:
   ```
   cd C:\Users\YourUsername\Documents
   ```
3. Rename the file:
   ```
   ren example.txt example_renamed.txt
   ```

#### Notes

* If your file names or paths contain spaces, enclose them in double quotes. For example:
  ```
  ren "old file.txt" "new file.txt"
  ```
* Ensure that you include the file extensions when renaming files.
* The `ren` command is not case-sensitive.


By following these steps, you can easily rename a single file using the Command Prompt and the `ren` command in Windows.
