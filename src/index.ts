import { AnchoreCheck } from "./Anchore/AnchoreCheck"
import * as fs from 'fs';

var anc = new AnchoreCheck('http://mswscan-testjp.eastus.cloudapp.azure.com:8228/v1/', "admin", fs.readFileSync('./creds', 'ascii').slice(0, -1));
// anc.get('/images');
anc.getImage('jpetersenames/ipserver:0.1.0');

// TODO: Add image
// TODO: Query image policy check
