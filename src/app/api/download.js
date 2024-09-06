import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.resolve('/Bukoni.apk');
    const stat = fs.statSync(filePath); 
    
    res.writeHead(200, {
        'Content-Type': 'application/vnd.android.package-archive', 
        'Content-Length': stat.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res); 
}
