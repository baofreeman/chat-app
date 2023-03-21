import { faFile, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input() {
    return (
        <section className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <input type="file" style={{ display: 'none' }} id="file" />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faFile} />
                </label>
                <button>Send</button>
            </div>
        </section>
    );
}

export default Input;
