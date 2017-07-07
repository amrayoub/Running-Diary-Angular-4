import {IActivity} from './activity.model';

export const SAVED_ACTIVITIES : IActivity[] = [

  {
    "id":1,
    "name": "Main Bike Trails",
    "date": new Date ('07/07/2017'),
    "distance":6.2,
    "comments":"Nice day , cool temps",
    "gpxData":'../../assets/gpx/1.gpx'
  },
  {
    "id":2,
    "name":"Industrial Park",
    "date": new Date('07/08/2017'),
    "gpxData":'../../assets/gpx/2.gpx',
    "distance":1.2,
    "comments":'Cool and Windy.'
  },
  {
    "id": 3,
    "name":'Forest Route',
    "date": new Date('07/09/2017'),
    "gpxData":'../../assets/gpx/3.gpx',
    'distance':3.2,
    "comments":'Evening Run'
  },
  {
    "id":4,
    "name":'Lake Shore',
    "date": new Date('07/10/2017'),
    "gpxData": '../../assets/gpx/4.gpx',
    "distance":8.4,
    "comments":'Cool and windy by the lake'
  }
]
