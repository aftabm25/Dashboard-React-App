import React from 'react'
import moment from 'moment'

const Notifs = (props) => {
    const{notifs} =props;
    return(
      <div className="section">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Notifications</span>
                  <ul className="notifications">
                      {notifs && notifs.map(item => {
                          return(
                              <li key={item.id}>
                                  <span className="name">{item.user}  </span>
                                  <span></span>
                                  <span>{item.content}</span>
                                  <div className="grey-text note-date">
                                      { moment(item.time.toDate()).fromNow()}
                                  </div>
                              </li>
                          )
                      })}
                  </ul>
              </div>
          </div>
      </div>
    )
} 
export default Notifs