import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);
	};

	return (
		<Container className="py-5" style={{
            minHeight: "100vh",
            width: "70vw",
            margin: "auto",
            padding: "1.3rem",
        }} >
			<h2>Contact Us</h2>
			<p>Have questions? Feel free to send us a message.</p>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Enter your name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						name="message"
						rows={4}
						placeholder="Enter your message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send Message
				</Button>
			</Form>
		</Container>
	);
};

export default Contact;
