let emulator;

function startVM() {

document.getElementById("screen").innerHTML = "";

emulator = new V86({

wasm_path: "v86/v86.wasm",

memory_size: 256 * 1024 * 1024,

vga_memory_size: 8 * 1024 * 1024,

screen_container:
document.getElementById("screen"),

bios: {
url: "v86/bios/seabios.bin"
},

vga_bios: {
url: "v86/bios/vgabios.bin"
},

hda: {
url: "images/tinycore.img"
},

autostart: true
});
}