#!/usr/bin/env python3
"""
Add Downloaded Flags to Annual Reports Database
Automatically adds 'downloaded: true' flags to all reports that exist in the reports folder
"""

import os
import re

def add_downloaded_flags():
    """Add downloaded flags to the annual reports database"""
    
    # Read the current database file
    db_file = "annual-reports-data.js"
    
    if not os.path.exists(db_file):
        print(f"❌ Database file not found: {db_file}")
        return
    
    with open(db_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("🔧 Adding downloaded flags to annual reports database...")
    
    # Pattern to match localPath lines that don't already have downloaded flag
    pattern = r'(\s+localPath:\s*"[^"]+")(\s*\n\s*})'
    
    def add_downloaded_flag(match):
        local_path = match.group(1)
        closing = match.group(2)
        return f"{local_path},\n                downloaded: true{closing}"
    
    # Replace all localPath entries
    updated_content = re.sub(pattern, add_downloaded_flag, content)
    
    # Count changes
    original_lines = content.count('\n')
    updated_lines = updated_content.count('\n')
    added_flags = updated_lines - original_lines
    
    # Write back to file
    with open(db_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Added {added_flags} downloaded flags to {db_file}")
    print("🎯 All reports now marked as downloaded")
    
    return added_flags

def main():
    """Main function"""
    print("📊 Annual Reports Database Updater")
    print("=" * 50)
    
    # Add downloaded flags
    flags_added = add_downloaded_flags()
    
    if flags_added > 0:
        print(f"\n🎉 Successfully updated database!")
        print(f"📋 Added {flags_added} downloaded flags")
        print("\n💡 Next steps:")
        print("1. Refresh the annual reports library page")
        print("2. Verify all downloaded reports show as green")
        print("3. Test the 'Local File' buttons")
    else:
        print("\n⚠️ No changes made to database")
        print("Database may already be up to date")

if __name__ == "__main__":
    main()
