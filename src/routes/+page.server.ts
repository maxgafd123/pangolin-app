// @ts-nocheck
import cloudinary from 'cloudinary';
import db from '$db/mongo';

const psightings = db.collection('psightings');


cloudinary.v2.config({ 
    cloud_name: 'ddtbulznp', 
    api_key: '133295687857349', 
    api_secret: 'QNEA22ggDFDUAS2iMkUHDmicGO4' 
  });

  
    
  

export const actions = {
    default: async ({ locals, request}) => {
        const data = await request.formData()
        const name = data.get('name')
        const status = data.get('status')
        const cod = data.get('cod')
        const addinfo = data.get('addinfo')
        const latitude = data.get('latitude')
        const longitude = data.get('longitude')
        const file = data.get('file') as File;
        const buffer = Buffer.from(await file.arrayBuffer());
        const b64 = buffer.toString('base64');
        
        const result = await cloudinary.v2.uploader
            .upload(`data:${file.type};base64,${b64}`)
            .catch((err: any) => {
                console.log('err', err);
            });

        const record = {
            name: name,
            staus: status,
            causeOfDeath: cod,
            additionalInfo: addinfo,
            latitude: latitude,
            longitude: longitude,
            imageID: result.asset_id,
            imageURL: result.url
        }

        psightings.insertOne(record);
        

            return {
                body: 'Success!'
            }       
            
            
        }


    }



