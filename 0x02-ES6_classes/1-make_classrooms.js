// eslint-disable-next-line import/extensions
import ClassRoom from './0-classroom.js';

// eslint-disable-next-line no-unused-vars
export default function initializeRooms() {
  return ([
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ]);
}
