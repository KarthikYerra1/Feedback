import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  feedbackGiven = () => {
    this.setState({
      isFeedbackGiven: true,
    })
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackGiven ? (
            <div className="thank-you-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thank-you-heading">Thank you!</h1>
              <p className="thanks-feedback">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div className="emoji-feedback-container">
              <h1 className="feedback-question">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id} className="emoji-text-container">
                    <button
                      className="btn"
                      type="button"
                      onClick={this.feedbackGiven}
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="emoji"
                      />
                    </button>
                    <p className="emoji-name">{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
