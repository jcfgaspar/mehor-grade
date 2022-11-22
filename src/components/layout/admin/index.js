import Link from "next/link";
import { useState } from "react";
import DropdownProfile from "src/components/dropdown/profile";
import { MessageContext } from "@helpers/context/message";
import menuAdmin from "@helpers/menus/admin";
import { motion,AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
};

export default function PageLayout(props) {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const MessageCallback = (props) => {
    setMessage(props.info);
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  };

  return (
    <>
      <div className="d-flex flex-nowrap">
        {RenderMenu(menuAdmin)}
        <main className="full">
          <MessageContext.Provider value={MessageCallback}>
            <AnimatePresence
              exitBeforeEnter
              initial={false}

            >
              <motion.div
                key={router.route}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
                className="overflow-auto"
              >
                {props.children}
              </motion.div>
            </AnimatePresence>
            <RenderMessage info={message} />
          </MessageContext.Provider>
        </main>
      </div>
    </>
  );
}

const RenderMessage = (props) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">{props.info.title}</strong>
          <small>{props.info.time}</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{props.info.message}</div>
      </div>
    </div>
  );
};

const RenderList = (object) => {
  const class_button =
    "btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed";
  return (
    <li className="mb-1" key={object.name}>
      <button
        className={class_button}
        data-bs-toggle="collapse"
        data-bs-target={`#${object.name}-collapse`}
        aria-expanded="false"
      >
        {object.name}
      </button>
      <div className="collapse" id={`${object.name}-collapse`}>
        <ul
          className="btn-toggle-nav list-unstyled fw-normal pb-1 small"
          key={object.name}
        >
          {object.links.map((menu) => (
            <li key={menu.name}>
              <Link href={menu.url}>
                <a
                  href="#"
                  className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                >
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const RenderMenu = (options) => {
  return (
    <div className="flex-shrink-0 p-3 bg-white mw280" key={options.name}>
      <span className="fs-5 fw-semibold">Área do {options.name}</span>
      <hr></hr>
      <div className="d-flex flex-column">
        <ul className="list-unstyled ps-0 menu_scroll">
          {options.menus.map((opt) => RenderList(opt))}
        </ul>
        <DropdownProfile user={options.name} />
      </div>
    </div>
  );
};
