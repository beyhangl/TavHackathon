def lets_go():
        print('AAA')
	import glob
        print('AAA')
	import os
        print('AAA')
	import cv2
        print('AAA')
	import mssqlcone as sql_op
        print('AAA')
        description=['',"In the toilet Floor 2","CarPark Floor 0","In Check-in Area Floor 1"]
        cam_locations=['','5:48','2:30','8:05']
	list_of_files = glob.glob('images/*') # * means all if need specific format then *.csv
	latest_file = max(list_of_files, key=os.path.getctime)
	import face_recognition
        print('AAA')
	for i in range(1,4):
		try:		

			known_image = face_recognition.load_image_file('/home/beyhan/tav_hackathon/bilinen_isimler/' + str(i)+'.png')
			print(str(latest_file))
			unknown_image = face_recognition.load_image_file('/home/beyhan/tav_hackathon/'+str(latest_file))

			biden_encoding = face_recognition.face_encodings(known_image)[0]

			unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

			results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
			if results[0] == True:
			  print(i)
                          print('Eslesme ok!!')
			  path = '/home/beyhan/tav_hackathon/check-in'
	   		  if i ==1:		
                                  splitted_alls=latest_file.split("_")
                                  print(splitted_alls)
                                  which_camera=splitted_alls[1]
                                  print(which_camera)
				  print('hey')
				  cv2.imwrite(os.path.join(path , 'Beyhan.Gul_63115937597_TK201'+'.jpg'), unknown_image)
				  cv2.waitKey(0)
 				  sql_op.letscontrol(cam_locations[int(which_camera)],'0',description[int(which_camera)],'63115937597')
			  if i==3:
                                  splitted_alls=latest_file.split("_")
                                  print(splitted_alls)
                                  which_camera=splitted_alls[1]
				  cv2.imwrite(os.path.join(path , 'Fatih.Seyfullah_36524178963_TK201'+'.jpg'), unknown_image)
				  cv2.waitKey(0)
                                  sql_op.letscontrol(cam_locations[int(which_camera)],'0',description[int(which_camera)],'36524178963')
				  #sql_op.letscheckin('5F','Istanbul','Antalya','TH506','T7112FH2','57629328472','Guldudu Firtina','2')
			  if i==2:
                                  splitted_alls=latest_file.split("_")
                                  print(splitted_alls)
                                  which_camera=splitted_alls[1]
                                  print(which_camera)
				  cv2.imwrite(os.path.join(path , 'Halil.Dalmaz_21902268022_TK201'+'.jpg'), unknown_image)
				  cv2.waitKey(0)
                                  sql_op.letscontrol(cam_locations[int(which_camera)],'0',description[int(which_camera)],'21902268022')
			if results[0] == True:
				break;
		except:
                 pass
lets_go()
