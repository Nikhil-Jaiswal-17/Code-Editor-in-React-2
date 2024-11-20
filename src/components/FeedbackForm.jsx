import './FeedbackForm.css'

export default function FeedbackForm() {
    return (
        <div className="feedback-form p-5">
            <h2>Feed-Back Form</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a href="/">Submit</a>
        </div>
    )
}
