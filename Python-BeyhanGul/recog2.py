import cv2
def test():
	#cam = cv2.VideoCapture(1)
	cam = cv2.VideoCapture('rtsp://192.168.43.1:8080/h264_ulaw.sdp')
	cv2.namedWindow("test")

	img_counter = 0

	while True:
	    try:
	     ret, frame = cam.read()
	     cv2.imshow("test", frame)
	     if not ret:
		 break
	     k = cv2.waitKey(1)
	    except:
	     test()
	    if img_counter %27==0:
		try:
		 print(img_counter)
		 # SPACE pressed
		 img_name = "images/_2_{}.jpg".format(img_counter)
		 cv2.imwrite(img_name, frame)
		 print("{} written!".format(img_name))
		except:
		 pass
	    img_counter += 1

	cam.release()

	cv2.destroyAllWindows()
test()
