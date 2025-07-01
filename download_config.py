#!/usr/bin/env python3
"""
Download Configuration for Annual Reports
Centralized configuration for all download scripts
"""

import os

class DownloadConfig:
    """Configuration class for annual reports download"""
    
    # Default download folder - set to the project directory
    DEFAULT_DOWNLOAD_FOLDER = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    # Alternative download folders
    ALTERNATIVE_FOLDERS = {
        "current": "./reports",
        "desktop": os.path.expanduser("~/Desktop/reports"),
        "documents": os.path.expanduser("~/Documents/reports"),
        "project": DEFAULT_DOWNLOAD_FOLDER
    }
    
    # Exchange directories
    EXCHANGES = [
        'ice', 'nasdaq', 'lseg', 'hkex', 'jpx', 
        'sse', 'szse', 'tmx', 'deutsche', 'euronext'
    ]
    
    # Download settings
    DOWNLOAD_SETTINGS = {
        "timeout": 60,
        "chunk_size": 8192,
        "retry_attempts": 3,
        "delay_between_downloads": 2,
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    @classmethod
    def get_default_folder(cls):
        """Get the default download folder"""
        return cls.DEFAULT_DOWNLOAD_FOLDER
    
    @classmethod
    def ensure_folder_exists(cls, folder_path):
        """Ensure the folder exists, create if necessary"""
        os.makedirs(folder_path, exist_ok=True)
        return folder_path
    
    @classmethod
    def get_exchange_folder(cls, base_folder, exchange):
        """Get the full path for an exchange folder"""
        return os.path.join(base_folder, exchange)
    
    @classmethod
    def create_all_exchange_folders(cls, base_folder):
        """Create all exchange folders"""
        created_folders = []
        for exchange in cls.EXCHANGES:
            exchange_folder = cls.get_exchange_folder(base_folder, exchange)
            os.makedirs(exchange_folder, exist_ok=True)
            created_folders.append(exchange_folder)
        return created_folders

# For backward compatibility
DEFAULT_DOWNLOAD_FOLDER = DownloadConfig.DEFAULT_DOWNLOAD_FOLDER
