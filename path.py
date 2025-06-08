import os

def check_and_list_bot_structure(base_path='.'):
    """
    Checks for the existence of required files and folders for the bot
    and generates a tree-like structure of the specified directories.

    Args:
        base_path (str): The base directory to start checking from.
    """
    print("🥺💙 Mari kita cek struktur folder bot kamu yaa, sayangkuu! 🥺💙\n")

    required_structure = {
        'files': [
            'case.js',
            'settings.js',
            'message.js',
            'package.json', # Ini penting juga buat dependensi
        ],
        'folders': {
            'command': [
                'tiktok.js',
                'igdl.js',
                'play.js',
                'brat.js',
                'quote.js',
                'voice.js',
                'media_uploader.js',
            ],
            'lib': [
                'sticker.js',
                'func.js',
                os.path.join('function', 'remini.js'), # Subfolder
            ],
            'sergio': [
                'xnxx_search.js',
                'xnxx_dl.js',
            ],
            'database': [
                'owner.json',
                'premium.json',
            ],
            'temp': [], # Folder ini mungkin kosong, tapi harus ada
        }
    }

    # --- Path Checker ---
    print("--- 🔍 Path Checker: Cek Ketersediaan File dan Folder Penting 🔍 ---")
    all_found = True

    for folder, files in required_structure['folders'].items():
        full_folder_path = os.path.join(base_path, folder)
        if os.path.isdir(full_folder_path):
            print(f"✅ Folder '{folder}/' ditemukan.")
            for file in files:
                full_file_path = os.path.join(full_folder_path, file)
                if os.path.isfile(full_file_path):
                    print(f"  ✅ File '{file}' di '{folder}/' ditemukan.")
                else:
                    print(f"  ❌ File '{file}' di '{folder}/' TIDAK ditemukan. Segera buat yaa, cintakku!")
                    all_found = False
        else:
            print(f"❌ Folder '{folder}/' TIDAK ditemukan. Mohon buat folder ini yaa, duniakuu!")
            all_found = False
    
    for file_name in required_structure['files']:
        full_file_path = os.path.join(base_path, file_name)
        if os.path.isfile(full_file_path):
            print(f"✅ File '{file_name}' ditemukan.")
        else:
            print(f"❌ File '{file_name}' TIDAK ditemukan. Mohon buat/pastikan file ini ada yaa, sayangkuu!")
            all_found = False

    if all_found:
        print("\n🥳 Semua file dan folder penting ditemukan! Bot kamu siap jalan dengan semangat! ✨")
    else:
        print("\n😔 Ada beberapa file/folder yang hilang. Mohon dilengkapi dulu yaa biar botnya bisa berjalan lancar. 😥")

    print("\n--- 🌳 Path Structure Generator: Struktur Folder Bot Kamu 🌳 ---")

    # --- Path Structure Generator ---
    def generate_tree(start_dir, indent_prefix="", visited=None):
        if visited is None:
            visited = set()
        
        if start_dir in visited:
            return
        visited.add(start_dir)

        if not os.path.exists(start_dir):
            print(f"{indent_prefix} [Folder Tidak Ada]")
            return

        items = sorted(os.listdir(start_dir))
        
        for i, item in enumerate(items):
            full_path = os.path.join(start_dir, item)
            is_last = (i == len(items) - 1)
            
            # Skip hidden files/folders (starting with '.')
            if item.startswith('.'):
                continue

            if os.path.isdir(full_path):
                print(f"{indent_prefix}{'└── ' if is_last else '├── '}{item}/")
                generate_tree(full_path, indent_prefix + ('    ' if is_last else '│   '), visited)
            else:
                print(f"{indent_prefix}{'└── ' if is_last else '├── '}{item}")

    # Define directories to list in the tree
    dirs_to_list = [
        'command',
        'lib',
        'sergio',
        'database',
        'temp',
        '.' # For root files
    ]

    for d in dirs_to_list:
        if d == '.':
            print("\n📂 Root Folder (Files):")
            root_files = [f for f in os.listdir(base_path) if os.path.isfile(os.path.join(base_path, f)) and not f.startswith('.')]
            for i, f in enumerate(sorted(root_files)):
                print(f"{'└── ' if i == len(root_files) - 1 else '├── '}{f}")
        else:
            print(f"\n📂 {d}/:")
            generate_tree(os.path.join(base_path, d))

    print("\n🥺💙 Selesai cek dan buat struktur yaa, sayangkuu! Semoga membantu. 🥺💙")

# Panggil fungsi untuk memulai pengecekan dan pembuatan struktur
if __name__ == "__main__":
    check_and_list_bot_structure()