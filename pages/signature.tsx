import { useState } from "react";

import Link from "next/link";
import Layout from "@components/Layout";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import SignaturePad from "react-signature-canvas";
import styles from "../styles/signature.module.css";

import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

// Questions component -> because its only text
const Questions = () => {
  const faqs = [
    {
      question: "CC Licence",
      answer:
        "I, the undersigned presenter, hereby state that I am the exclusive owner of copyright and related rights on the abovementioned work, which includes the lecture itself as well as all the assisting tools used during the lectures (e.g. the presentation and other similar documents). As the exclusive right owner I hereby agree that Jožef Stefan Institute records the abovementioned work for educational purposes and authorize Jožef Stefan Institute to distribute and make available to the public the abovementioned work in various media, including, but not limited to classroom, television (broadcast, cable and satellite), internet (including webcasts and podcasts), and any other communications medium currently existing or later created. In accordance with the Copyright and Related Rights Act of Republic of Slovenia I am therefore transferring non-exclusively, territorially unlimited and for the time of duration of my copyright and related rights to the Jožef Stefan Institute the following economic rights: the right of reproduction, the right of distribution, the right of public transmission, the right of public communication by phonograms and videograms, the right of public presentation, the right of broadcasting, the right of rebroadcasting, the right of secondary broadcasting and the right of making available to the public. I am keeping my moral rights. For the purpose of translation and subtitling of the abovementioned work and for the purpose of using excerpts of the abovementioned work in non-commercial adverts or other non-commercial promotional materials I am also transferring non-exclusively, territorially unlimited and for the time of duration of my copyright and related rights to the Jožef Stefan Institute the right of transformation of the abovementioned work. As the presenter I affirm that in case my abovementioned work includes works, protected by other persons’ copyright or related rights, I have either gained these persons’ copyright or related rights to these works or have gained their permission for publishing my abovementioned work online. I take full responsibility for potential damages or other claims of other copyright or related rights owners against Jožef Stefan Institute that arise out of publishing my abovementioned work online. I also agree that Jožef Stefan Institute processes my herein provided personal data in the database of presenters for the purpose of managing the portal. As the copyright and related rights owner I am fully aware that the content (including the videorecording of my abovementioned work) is published on the videolectures.net portal under the Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 licence.",
    },
    {
      question: "GDPR",
      answer: (
        <span>
          <p className="font-semibold">
            I am informed that, in accordance with General Data Protection
            Regulation (GDPR), I have the rights to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span>demand access to my personal data</span>
            </li>
            <li>
              <span>
                demand a correction, deleting or a limitation of processing of
                my personal data, and that I have the right to object to
                processing and the right to transfer my personal data,
              </span>
            </li>
            <li>
              <span>
                revoke my consent at any time by notifying JSI via the e-mail:
                info@videolectures.net,
              </span>
            </li>
            <li>
              <span>
                file a complaint with the Information Commissioner of Slovenia
                or with a supervisory authority in the Member State of my
                habitual residence or my place of work.
              </span>
            </li>
          </ul>
          <p className="pt-6 font-semibold">I am informed that:</p>
          <ul className="list-disc pl-6">
            <li>
              <span>
                the manager of personal data provided above is used only for the
                purposes stated above until I revoke my consent,
              </span>
            </li>
            <li>
              <span>
                there is no automated decision making done based on my personal
                data,
              </span>
            </li>
            <li>
              <span>
                that the personal data is being stored until this consent is
                revoked.
              </span>
            </li>
          </ul>
        </span>
      ),
    },
    // More questions...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-base">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-gray-600">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

// Forms
interface IFormValues {
  first_name: string;
  last_name: string;
  lecture_title: string;
  institution: string;
  email_address: string;
  room_number: string;
  date: string;
  data_process: boolean;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type: string;
  wide?: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required, wide, type }: InputProps) => (
  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
    <label
      htmlFor={label.replaceAll("_", " ")}
      className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2 capitalize"
    >
      {label.replaceAll("_", " ")}
    </label>
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <input
        type={type}
        className={
          "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" +
          (!wide ? " sm:max-w-xs" : "")
        }
        {...register(label, { required })}
      />
    </div>
  </div>
);

let sigPadRef: any;

const Signature = () => {
  const [signError, setSignError] = useState(null);

  const clearPad = () => {
    sigPadRef.clear();
  };

  // Forms
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (sigPadRef.isEmpty()) {
      setSignError("Signature cannot be empty");
      return;
    }

    setSignError(null);
    const signatureImage = sigPadRef.getTrimmedCanvas().toDataURL("image/png");
    console.log("ready to send to server");
  };

  return (
    <Layout title="Home | Sign">
      <form
        className="space-y-8 divide-y divide-gray-200 mb-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Lecture agreement
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Before we can upload you lecture to Videolectures.net repository
                you have to fill out the form.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <Input
                label="first_name"
                type="text"
                register={register}
                required
              />

              <Input
                label="last_name"
                type="text"
                register={register}
                required
              />

              <Input
                label="lecture_title"
                type="text"
                register={register}
                required
                wide
              />

              <Input
                label="institution"
                type="text"
                register={register}
                required
                wide
              />

              <Input
                label="email_address"
                type="email"
                register={register}
                required
                wide
              />

              <Input
                label="room_number"
                type="number"
                register={register}
                required={false}
                wide
              />

              <Input
                label="date"
                type="date"
                register={register}
                required
                wide
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        <Questions />

        {/* Checkbox */}
        <div className="pt-6">
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                className={
                  "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                }
                {...register("data_process", { required: true })}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="offers" className="font-medium text-gray-800">
                I allow JSI to process my data
              </label>
              <p id="offers-description" className="text-gray-500">
                I allow »Jozef Stefan« Institute (JSI) to process my personal
                data provided above in accordance with the General Data
                Protection Regulation (GDPR) in its database with the purpose to
                keep a database of all lecturers, published on the
                Videolectures.Net repository.
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="pt-6">
          {signError ? (
            <p className="text-red-400 font-light">{signError}</p>
          ) : (
            <h3>Signature</h3>
          )}
          <div className="relative flex mx-auto py-2">
            <div className={styles.sigContainer}>
              <SignaturePad
                canvasProps={{ className: styles.sigPad }}
                ref={(ref: any) => {
                  sigPadRef = ref;
                }}
                onEnd={() => !sigPadRef.isEmpty() && setSignError(null)}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <button
              onClick={() => clearPad()}
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Signature;
