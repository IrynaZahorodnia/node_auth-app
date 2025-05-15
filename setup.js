import { client } from './src/utils/db.js';
import 'dotenv/config';
import { User } from './src/models/user.js';

client.sync({ force: true });
