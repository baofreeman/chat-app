import { avt } from '../assets';

function Message() {
    return (
        <section className="message owner">
            <div className="message_info">
                <img src={avt} />
                <span>just now</span>
            </div>
            <div className="message_content">
                <p>heelooo</p>
            </div>
        </section>
    );
}

export default Message;
