#passenger
#CheckinInfo
import pymssql
import csv
import time
conn = pymssql.connect('94.73.145.8', 'OdiDbUser', 'KBhu85J9', 'OdiDb')
cursor = conn.cursor()
print('Mssql ok!')


#for row in cursor:
#    print('row = %r' % (row,))

#conn.close()

#csv_data = csv.reader(file('/home/beyhan/thy_hackathon/194 (copy).csv'))
#for row in csv_data:
 #str(tuple(row)).split(',')[0]
 #print("INSERT INTO passenger   (TckNo,Yas,DogumYeri,Cinsiyet,Evlilik,YasadigiYer,Durum,Takim,Hobi,Cyas,Universite,Sirket,Esya,EvcilHayvan,Twitter1,Twitter2,Twitter3,Interest,BegeniKategori) VALUES" +str(tuple(row)))
 #print("INSERT INTO passenger   (TckNo,Yas,DogumYeri,Cinsiyet,Evlilik,YasadigiYer,Durum,Takim,Hobi,Cyas,Universite,Sirket,Esya,EvcilHayvan,Twitter1,Twitter2,Twitter3,Interest,BegeniKategori,GroupType) VALUES" +str(tuple(row)))
# cursor.execute("INSERT INTO passenger   (TckNo,Yas,DogumYeri,Cinsiyet,Evlilik,YasadigiYer,Durum,Takim,Hobi,Cyas,Universite,Sirket,Esya,EvcilHayvan,Twitter1,Twitter2,Twitter3,Interest,BegeniKategori,KoltukNo,GroupType,AdSoyad) VALUES" +str(tuple(row)))
 
#conn.commit()



#for row in cursor:
#    print('row = %r' % (row,))

#conn.close()

def letscontrol(lokasyon,status,descr,tcno):
  print('test1')
  import pymssql
  print('test2')
  conn = pymssql.connect('94.73.145.8', 'OdiDbUser', 'KBhu85J9', 'OdiDb')
  cursor = conn.cursor()
  print('test3')
  
  text="UPDATE tav_passenger2 set last_seen_date= getdate(), cam_coordinate = '"+str(lokasyon)+ "' , status = '"+ str(status) + "' ,cam_description = '"+str(descr)+ "' WHERE tcno = '" +str(tcno)+ "'"
  print(text)
  cursor.execute("UPDATE tav_passenger2 set last_seen_date= getdate(), cam_coordinate = '"+str(lokasyon)+ "' , status = '"+ str(status) + "' ,cam_description = '"+str(descr)+ "' WHERE tcno = '" +str(tcno)+ "'")
  conn.commit()



