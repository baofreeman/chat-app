import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';

function Chat() {
    return (
        <section className="chat">
            <div className="chat_info">
                <h3>Name</h3>
                <div className="chat_icons">
                    <div className="chat_icons_wrapper">
                        <FontAwesomeIcon className="chat_icon" icon={faCamera} />
                        <div className="chat_border"></div>
                    </div>
                    <div className="chat_icons_wrapper">
                        <FontAwesomeIcon className="chat_icon" icon={faUser} />
                        <div className="chat_border"></div>
                    </div>
                    <div className="chat_icons_wrapper">
                        <FontAwesomeIcon className="chat_icon" icon={faEllipsis} />
                        <div className="chat_border"></div>
                    </div>
                </div>
            </div>
            <Messages />
            <Input />
        </section>
    );
}

export default Chat;
