import React from 'react';

const Message = ({labels, subject, starred}) => {
  return (
  <div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className={starred ? "star fa fa-star-o" : "star fa fa-star"}> </i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    {labels.map(label => (
      <span class="label label-warning">{label}</span>
    ))}
    <a href="#">{subject}</a>
  </div>
</div>
);
}

export default Message;