// Update the showPopup function to include two buttons inside the popup
function showPopup() {
    Swal.fire({
        title: "Choise Your Version",
        // text: "GeeksForGeeks is the best platform for Learning.",
        showCloseButton: true,
        icon: "info",
        confirmButtonText: 'Enjoy',
        focusConfirm: false,
        html: `
            <button onclick="downloadsWin()" id="downloadButton1" class="button is-blurple is-medium" >Windows X86-64 Bit</button>
            <div>
            <br>
            <button onclick="comingsoon()" class="button is-blurple is-medium" >Linux .Deb (Debian)</button>
            <div>
            <br>
            </div>
            <button onclick="comingsoon()" class="button is-blurple is-medium" >Linux .AppImage (AppImage Package)</button>
        ` // Add two buttons inside the popup
    });

    // Add event listeners for the buttons inside the popup
    document.getElementById("downloadButton1").addEventListener("click", () => {
        // Handle the action for Download 1 button
        // This is just a placeholder for demonstration purposes
        window.open('https://www.mediafire.com/file/ka4sh5xsmrgr0r2/Kanata+Client+YTMusic-Setup-3.1.1-LUANYAR.exe/file', '_blank');
    });

    document.getElementById("downloadButton2").addEventListener("click", () => {
        // Handle the action for Download 2 button
        // This is just a placeholder for demonstration purposes
        window.open('https://www.example.com/download-file-2', '_blank');
    });
}

function comingsoon(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: "Coming Soon!!!"
      });
}

function downloadsWin(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Starting Downloads"
      });
}