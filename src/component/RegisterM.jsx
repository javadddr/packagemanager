import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Tabs,
  Tab,
  useDisclosure,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterM({title,borderi,colori,variant,wid}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [isSubmitting, setSubmitting] = useState(false);
  const [selected, setSelected] = useState("sign-up");
  const [isVisible, setVisiblePassword] = useState(false);
  const [isVisible2, setVisiblePassword2] = useState(false);
  
  // State to track the selected source
  const [source, setSource] = useState("");

  const toggleVisibility = () => setVisiblePassword(!isVisible);
  const toggleVisibility2 = () => setVisiblePassword2(!isVisible2);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    // Basic validation checks
    if (!form.email || !form.password || !form.confirmPassword) {
        toast.error("Please fill in all fields.");
        return;
    }
    if (form.password !== form.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
    }

    setSubmitting(true); // Start submission process
    try {
        // Step 1: Register the user
        const registerResponse = await fetch("https://api.globalpackagetracker.com/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: form.email, password: form.password, source: "mobile" }),
        });
        const registerData = await registerResponse.json();

        if (!registerResponse.ok) {
            // Registration error
            toast.error(registerData.message || "Signup failed.");
            return;
        }

        // Step 2: Login the user
        const loginResponse = await fetch("https://api.globalpackagetracker.com/user/authByCredentials", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: form.email, password: form.password }),
        });
        const loginData = await loginResponse.json();

        if (!loginResponse.ok) {
            // Login error
            toast.error(loginData.message || "Login failed.");
            return;
        }

        // Step 3: Authenticate with the key from login data
        const keyResponse = await fetch("https://api.globalpackagetracker.com/user/authByKey", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: loginData.key }),
        });
        const keyData = await keyResponse.json();

        if (!keyResponse.ok) {
            // Key authentication error
            toast.error(keyData.message || "Failed to fetch user details.");
            return;
        }

        // Success message and further actions
        toast.success("Account created successfully! Redirecting...");
        onClose(); // Close modal on successful registration

        // Redirect to login page
        window.location.href = "https://app.globalpackagetracker.com/login";

    } catch (error) {
        // Catch any fetch or other errors
        toast.error("An error occurred. Please try again.");
    } finally {
        setSubmitting(false); // End submission process
    }
};

  // Button options
  const sources = [
    "Google search",
    "Google Marketplace",
    "Other",
    "YouTube",
    "Product Hunt",
   
  ];
console.log("colori",colori)
  return (
   <div className="dark">
      <Button color={colori}
              variant={variant}
              className={`shadow-2xl ${wid} ${borderi?"border border-indigo-600":""} `} onPress={onOpen}>
       {title}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose} className="dark">
        <ModalContent className="pr-0 flex flex-col  w-[370px] justify-center items-center h-[570px] pt-4 dark">
          {(onClose) => (
            <>
              <ModalBody className="overflow-hidden dark ">
                <Tabs
                  fullWidth
                  size="md"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                  aria-label="Tabs form"
                >
                  <Tab color="secondary" key="sign-up" title="Sign up">
                    <form className="flex flex-col gap-4">
                      <p className="text-sm text-gray-400 -mb-3 mt-3">Email:</p>
                      <Input
                        color="secondary"
                        isRequired
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="max-w-xs"
                        placeholder="Enter your email"
                        type="email"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          color: 'white',
                          marginTop: '0px',
                        }}
                      />
                      <p className="text-sm text-gray-400 -mb-3 mt-3">Password:</p>
                      <Input
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        endContent={
                          <button
                            type="button"
                            onClick={toggleVisibility}
                            aria-label="toggle password visibility"
                          >
                            {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        color="secondary"
                        className="max-w-xs"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          color: 'white',
                          marginTop: '0px',
                        }}
                      />
                      <p className="text-sm text-gray-400 -mb-3 mt-3">Confirm Password:</p>
                      <Input
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        endContent={
                          <button
                            type="button"
                            onClick={toggleVisibility2}
                            aria-label="toggle password visibility"
                          >
                            {isVisible2 ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                          </button>
                        }
                        type={isVisible2 ? "text" : "password"}
                        color="secondary"
                        className="max-w-xs text-gray-100"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          color: 'white',
                          marginTop: '0px',
                        }}
                      />
                      <p className="text-sm text-gray-400">Where did you hear about us? (Optional)</p>
                      <div className="flex justify-center flex-wrap gap-1">
                        {sources.map((src) => (
                          <Button
                            key={src}
                            variant={source === src ? "flat" : "flat"}
                            color={source === src ? "warning" : "primary"}
                            onPress={() => setSource(src)}
                            size="sm"
                            radius="sm"
                            
                            
                          >
                            {src}
                          </Button>
                        ))}
                      </div>
                      <Button
                        fullWidth
                        color="primary"
                        variant="flat"
                        disabled={isSubmitting}
                        onPress={submit}
                        className={`shadow-2xl border border-indigo-600 `}
                      >
                        {isSubmitting ? "Registering..." : "Register"}
                      </Button>
                    </form>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer style={{ position: 'fixed', zIndex: 9999 }} />
    </div>
  );
}
