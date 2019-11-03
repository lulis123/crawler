import numpy as numpy
import cv2

path ="./imagem.png"

image = cv2.imread()

lower = np.array([0, 0, 0])
upper = np.array([10, 10, 10])

Mascara = cv2.inRange(image, lower, upper)