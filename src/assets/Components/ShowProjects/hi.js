{
// ✅ Comment: ye simple demo file hai theme test karne ke liye

// keyword + variable
let userName = "Frenix";
const userAge = 21;

// function + return + keyword
function greet(name, hii) {
  if (!name) {
    return "Hello, Stranger!";
  }
  return `Hello, ${name}!`;
}

// object + array + string
const user = {
  id: 1,
  name: userName,
  age: userAge,
  hobbies: ["coding", "music", "gaming"],
  address: {
    city: "Mumbai",
    pin: 400001,
  },
}

// boolean + null + undefined
let isActive = true;
let hasAccess = false;
let temp = null;
let notDefined;

// class + constructor + method
class Project {
  constructor(title, owner) {
    this.title = title;
    this.owner = owner;
  }

  start() {
    console.log(`${this.title} started by ${this.owner}`);
  }
}
{{{{{}}}}}
// usage
const project = new Project("Theme Builder", userName);
project.start();

console.log(greet(userName));
}

{

    "editor.wordWrap": "on",
    "files.autoSave": "afterDelay",
    "workbench.colorCustomizations": {
        "[Synthwave '84']": {
    "editor.background": "#1a1a1a",  
    "editor.foreground": "#cccccc",
    "editorCursor.foreground": "#bbbbbb",
    "editor.lineHighlightBackground": "#222222",
    "editor.selectionBackground": "#333333",
    "editor.inactiveSelectionBackground": "#2a2a2a00"
  }
        },
    "window.titleBarStyle": "custom",
    "workbench.colorTheme": "Dracula At Night",
    "workbench.iconTheme": "material-icon-theme",
    "github.copilot.enable": {
        "*": false,
        "plaintext": false,
        "markdown": false,
        "scminput": false,
        "cpp": false
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "explorer.confirmDelete": false,
    "background.enabled": true,
      "background.editor.backgroundImages": [
  "C:/Users/hdas9/Downloads/raiden-shogun-5k-3840x2160-16500.jpg"
],
"background.editor.opacity": 0.15,
"background.editor.position": "center",
"background.editor.size": "cover",
"liveServer.settings.donotShowInfoMsg": true,
"editor.accessibilitySupport": "off",
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"liveServer.settings.donotVerifyTags": true,
"[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"explorer.confirmDragAndDrop": false,
"explorer.confirmPasteNative": false,
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"workbench.editor.empty.hint": "hidden",
"editor.linkedEditing": true,
"editor.fontFamily": "Fira Code Regular",
"code-runner.executorMapByFileExtension": {

    ".vb": "cd $dir && vbc /nologo $fileName && $dir$fileNameWithoutExt",
    "javascript" : "cls; node",
    ".vbs": "cscript //Nologo",
    ".scala": "scala",
    ".jl": "julia",
    ".cr": "crystal",
    ".ml": "ocaml",
    ".zig": "zig run",
    ".exs": "elixir",
    ".hx": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
    ".rkt": "racket",
    ".scm": "csi -script",
    ".ahk": "autohotkey",
    ".au3": "autoit3",
    ".kt": "cd $dir && kotlinc $fileName -include-runtime -d $fileNameWithoutExt.jar && java -jar $fileNameWithoutExt.jar",
    ".kts": "kotlinc -script",
    ".dart": "dart",
    ".pas": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    ".pp": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    ".d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
    ".hs": "runhaskell",
    ".nim": "nim compile --verbosity:0 --hints:off --run",
    ".csproj": "dotnet run --project",
    ".fsproj": "dotnet run --project",
    ".lisp": "sbcl --script",
    ".kit": "kitc --run",
    ".v": "v run",
    ".vsh": "v run",
    ".sass": "sass --style expanded",
    ".cu": "cd $dir && nvcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    ".ring": "ring",
    ".sml": "cd $dir && sml $fileName",
    ".mojo": "mojo run",
    ".erl": "escript",
    ".spwn": "spwn build",
    ".pkl": "cd $dir && pkl eval -f yaml $fileName -o $fileNameWithoutExt.yaml",
    ".gleam": "gleam run -m $fileNameWithoutExt"
},

"editor.fontLigatures": true,
"terminal.integrated.fontLigatures.enabled": true,
"synthwave84.disableGlow": true,
"glassit.alpha": 245,
"RainbowBrackets.depreciation-notice": false,
"editor.tokenColorCustomizations": {
  "[Dracula]": {
    "textMateRules": [
      {
        "scope": "string",
        "settings": {
          "foreground": "#834835" // softer greenish-yellow instead of bright yellow
        }
      }
    ]
  }
}
}
