export function CreatePackageMedia() {
  return (
    <section className="glass-card p-8 rounded-2xl shadow-sm border border-outline-variant">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">image</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">
          Media Gallery
        </h2>
      </div>
      <div className="space-y-8">
        <div className="border-2 border-dashed border-outline-variant rounded-3xl p-12 flex flex-col items-center justify-center bg-surface-muted/20 group hover:bg-surface-container-low/50 hover:border-primary transition-all cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-3xl">
              cloud_upload
            </span>
          </div>
          <p className="font-headline-md text-[20px] text-on-surface text-center font-bold">
            Drag and drop package images
          </p>
          <p className="text-on-surface-variant text-center mt-2 font-label-sm">
            High-resolution JPEG or PNG. Max 10MB per file.
          </p>
          <button
            className="mt-8 px-8 py-2.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all"
            type="button"
          >
            Browse Files
          </button>
        </div>

        <div>
          <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-5 uppercase tracking-widest flex items-center justify-between">
            Image Previews (3/10)
            <span className="text-primary font-bold">
              Recommended: 16:9 Aspect Ratio
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
              <img
                alt="Preview 1"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5tcaoIjJf2gcULT4CTP7goCw5f5HQo3m6MWuCLh1lVal3JobU6S5OxrFWi3oHcuQI8l6zB9x11Cb2ANur_OUqWGtltiwScGzZqJBQ1bZmrzch6vWnOuhCWYQdjBv_dlMQCd77yRqquFWECkPrbcTUQH2hPGB9jCSi7ku1Kn-2COISnL8gMnHBLdtgWYALrJeRraLVFH8Z62LY8UYj6SS6nNdtLOyBqRvsOCEEtihpZ41bNMNuJstOd4F3YkmzsMfCawjNnlPZTmY"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-[10px] text-white font-bold rounded-lg shadow-lg">
                COVER
              </div>
            </div>
            <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
              <img
                alt="Preview 2"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACMheeHiURiPF1KL0qGxnDOFbyLR1jLDxqQVpAOzPftGEaM4uzQaSlF7LUMmRQYSL4uKjos-pnAdQe-khve82Ajhy6kafQLs_l2tWXTpUkmhU_pyg_5SfOirQZdc9Jh7sHbaVGSJo3iHqDsal-0BZUDLOtQmIpwhdM0Xdi0BD_it8BZmT479VMuxQDOkFyeX40lToNq3jkl80TPJIC-V5o5CGUtggKNA9DxRJ8YOw8fd6pJRzdqJDWSwKlMtEoSi413_XDInaTGCY"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
              <img
                alt="Preview 3"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVdiqL2FaLvMTZJIfyZlWUyle7VmyaHeOqp3PDCR3FGA0gcsH8UOfY6Wn03_omVhNibWPW2ap4gpAzcbpVMkten4bLs-LHlF1Xo_9Km8nlnz1rtNnXJgb6PPYKXQvZAP1OaKtqIuqAx-SdpJvCkt_0l4Kja6mosZ9RszmvjFLivO_22avqS1ucrLNfMc8DpL1nWQdYz-jaF_4X_jl3g8oxDOEjrzBIGGAWjehVXUlc-R2VRrIH-PVFdMrs42JndtaAzHJP1tRKQSE"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <button
              className="aspect-video rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center bg-surface-muted/20 text-on-surface-variant hover:text-primary hover:border-primary transition-all group"
              type="button"
            >
              <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                add_circle
              </span>
              <span className="text-[12px] font-bold mt-2 uppercase tracking-wider">
                Add More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
