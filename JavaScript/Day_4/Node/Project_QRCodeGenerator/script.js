import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

async function promptForUrl() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "url",
        message: "Enter a URL:",
      },
    ]);
    const url = answers.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));

    console.log("Entered URL:", url);
  } catch (error) {
    console.log("Some Error...");
  }
}

promptForUrl();
