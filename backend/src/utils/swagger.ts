import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { JsonObject } from 'swagger-ui-express';

const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname ,'..','swagger.yaml'), 'utf8')) as JsonObject;

export default swaggerDocument; 