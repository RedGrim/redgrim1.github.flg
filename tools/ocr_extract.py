import sys
from pathlib import Path
from PIL import Image
import pytesseract

img_path = Path('assets/images/LallyGolfPoster25.jpg')
if not img_path.exists():
    print('ERROR: image not found at', img_path)
    sys.exit(2)

try:
    text = pytesseract.image_to_string(Image.open(img_path))
    print('---OCR OUTPUT START---')
    print(text)
    print('---OCR OUTPUT END---')
except Exception as e:
    print('ERROR during OCR:', e)
    sys.exit(3)
