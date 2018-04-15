from random import randint
import cv2
import sys
import re
import os
import face_recogim as hey_face
CASCADE="haarcascade_frontalface_alt.xml"
FACE_CASCADE=cv2.CascadeClassifier(CASCADE)
output_video_file = 'videom.mp4'
frame_rate=32
def save_to_video(output_path):
	list_files = sorted(get_file_names(output_path), key=lambda var:[int(x) if x.isdigit() else x for x in re.findall(r'[^0-9]|[0-9]+', var)])
	img0 = cv2.imread(os.path.join(output_path,str(list_files[0])))
	height , width , layers =  img0.shape

	# fourcc = cv2.cv.CV_FOURCC(*'mp4v')
	fourcc = cv2.VideoWriter_fourcc(*'mp4v')
	#fourcc = cv2.cv.CV_FOURCC(*'XVID')
	videowriter = cv2.VideoWriter(output_video_file,fourcc, frame_rate, (width,height))
	for f in list_files:
		print("saving..." + f)
		img = cv2.imread(os.path.join(output_path, f))
		videowriter.write(img)
	videowriter.release()
	cv2.destroyAllWindows()

def convert_to_images(input_video_file,img_path):
	cam = cv2.VideoCapture(input_video_file)
	counter=0
	counter2=0
	while True:
		flag, frame = cam.read()
		if flag:
			if counter % 4 ==0:
				cv2.imwrite(os.path.join(img_path, str(counter2) + '.jpg'),frame)
				counter2 =counter2 +1
			counter = counter + 1
		else:
			break
		if cv2.waitKey(1) == 27:
			break
			# press esc to quit
	cv2.destroyAllWindows()
def count_files(dir):
    onlyfiles = next(os.walk(dir))[2] #dir is your directory path as string
    return len(onlyfiles)

def get_file_names(search_path):
	for (dirpath, _, filenames) in os.walk(search_path):
		for filename in filenames:
			yield filename#os.path.join(dirpath, filename)
def detect_faces(image_path,counter):

	image=cv2.imread(image_path)
	image_grey=cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
	faces = FACE_CASCADE.detectMultiScale(image_grey,scaleFactor=1.16,minNeighbors=5,minSize=(25,25),flags=0)
	for x,y,w,h in faces:
		
		sub_img=image[y-10:y+h+10,x-10:x+w+10]
		os.chdir("/home/beyhan/obje-tespit-video/keras-frcnn-master/face_rec/Extracted")
		name='/home/beyhan/obje-tespit-video/keras-frcnn-master/face_rec/Extracted/'+str(randint(0, 10000)) + ".jpg"
		cv2.imwrite(str(name),sub_img)
		os.chdir("/")
		get_result,whoareyou=hey_face.test_face(name)
		print(get_result)
		if get_result ==1:
 			print('zanli'+ str(name))
			cv2.rectangle(image,(x,y),(x+w,y+h),(0, 0,255),2)
			if str(whoareyou) =='0':
				cv2.putText(image,'Alexandru Monta - 24512542',(x-10, y-10), cv2.FONT_HERSHEY_PLAIN,1,(0, 255, 0))
			if str(whoareyou) =='1':
				cv2.putText(image,'Dilara Hinke - 45878568',(x-10, y-10), cv2.FONT_HERSHEY_PLAIN,1,(0, 255, 0))
			if str(whoareyou) =='2':
				cv2.putText(image,'Jr John Sink - 61221512',(x-10, y-10), cv2.FONT_HERSHEY_PLAIN,1,(0, 255, 0))
		else:
			cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
		cv2.imwrite('/home/beyhan/obje-tespit-video/keras-frcnn-master/face_rec/results/'+str(counter)+'.jpg',image)
	#cv2.imshow("Faces Found",image)
	
	if (cv2.waitKey(0) & 0xFF == ord('q')) or (cv2.waitKey(0) & 0xFF == ord('Q')):
		cv2.destroyAllWindows()

if __name__ == "__main__":
	
	if not "Extracted" in os.listdir("."):
		os.mkdir("Extracted")
	#convert_to_images('/home/beyhan/obje-tespit-video/keras-frcnn-master/newyork.mp4','/home/beyhan/frames/')
	count_of_directory=count_files('/home/beyhan/frames/')
	print(count_of_directory)
	#save_to_video('/home/beyhan/frames/')
	for i in range(0,int(count_of_directory)):
		print(str(i)+ '. frame')
		detect_faces('/home/beyhan/frames/frame'+str(i)+'.jpg',i)
