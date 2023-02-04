import { v4 } from "uuid"

export const NOTIFICATION_TYPE = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export const pendingNotification = (title) => {
  return {
    id: v4(),
    type: NOTIFICATION_TYPE.PENDING,
    title: `Searching for Similar Movies ${title}`,
    message: "Hang tight, we're running an algorithm to find movies that match your taste"
  }

}

export const successNotification = () => {
  return {
    id: v4(),
    type: NOTIFICATION_TYPE.SUCCESS,
    title: 'Similar Movies Found',
    message: 'We have found a list of movies that match your preferences'
  }
}
export const errorNotification = (errorMessage) => {
  return {
    id: v4(),
    type: NOTIFICATION_TYPE.ERROR,
    title: 'Error Finding Similar Movies',
    message: errorMessage
  }
}
