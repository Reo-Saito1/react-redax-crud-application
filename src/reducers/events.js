import _ from "lodash"
import {
    READ_EVENTS,
    DELETE_EVENT
} from "../actions/index"

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
} 