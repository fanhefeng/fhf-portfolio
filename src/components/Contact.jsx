import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { contactSection } from "../constants";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type, error }) => (
	<label className="flex flex-col">
		<span className="text-white font-medium mb-4">{label}</span>
		<input
      required
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${name}-error` : undefined}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-violet-300 border-none font-medium"
		/>
	</label>
);

const Contact = () => {
	const formRef = useRef();
  const sending = useRef(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
	const [confirmation, setConfirmation] = useState("");
  const [sendFailed, setSendFailed] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    if (sending.current) return;
    setMessageError("");
    setSendFailed(false);
		setEmailError("");
		setNameError("");
		setConfirmation("");
    if (!form.name.trim()) {
			setNameError("请输入你的姓名");
			return;
		}
		if (!validateEmail(form.email)) {
			setEmailError("请输入正确的邮箱地址");
			return;
		}
    if (!form.message.trim()) {
			setMessageError("留言不能为空");
			return;
		}
		sending.current = true;
    const submitted = { ...form };
    setLoading(true);
		emailjs
			.send(
				"service_901121",
				"default_template",
				{
					from_name: form.name,
					to_name: "fhf",
					from_email: form.email,
					to_email: "710790342@qq.com",
					message: form.message,
				},
				"1_tf4hfhcp9i72O7P"
			)
			.then(() => {
				sending.current = false;
        setLoading(false);
				setConfirmation("感谢你的留言，我会尽快回复你的。");
				setForm(current => Object.keys(submitted).every(key => current[key] === submitted[key])
          ? { name: "", email: "", message: "" } : current);
			})
			.catch((error) => {
				sending.current = false;
        setLoading(false);
				console.error(error);
        setSendFailed(true);
				setConfirmation("发送失败，请稍后再试。");
			});
	};

	return (
		<div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
			<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}>{contactSection.subtitle}</p>
				<h3 className={styles.sectionHeadText}>{contactSection.title}</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<InputField label="你的名字" name="name" error={nameError} value={form.name} onChange={handleChange} placeholder="怎么称呼" type="text" />
					{nameError && <span id="name-error" role="alert" className="text-red-400">{nameError}</span>}

					<InputField label="邮箱地址" name="email" error={emailError} value={form.email} onChange={handleChange} placeholder="你的邮箱" type="email" />
					{emailError && <span id="email-error" role="alert" className="text-red-400">{emailError}</span>}

					<InputField label="留言" name="message" error={messageError} value={form.message} onChange={handleChange} placeholder="你想对我说什么" type="text" />
          {messageError && <span id="message-error" role="alert" className="text-red-400">{messageError}</span>}
					<button disabled={loading} type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:opacity-60 disabled:cursor-wait w-fit text-white font-bold shadow-md shadow-primary">
						{loading ? "发送中..." : "发送"}
					</button>
					{confirmation && <p role="status" className={sendFailed ? "text-red-400" : "text-green-400"}>{confirmation}</p>}
				</form>
			</motion.div>

			<motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
