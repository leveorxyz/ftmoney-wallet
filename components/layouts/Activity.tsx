import {
  MinusCircleIcon,
  ArrowsPointingOutIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const paymentMethods = [
  { id: "visa", title: "Visa" },
  { id: "mastercard", title: "Mastercard" },
  { id: "amex", title: "American Express" },
];

export default function Activity() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        <li>
          <div className="relative pb-8">
            <span
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />

            <div className="relative flex space-x-3">
              <div>
                <span
                  className={classNames(
                    "bg-blue-500",
                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                  )}
                >
                  <PlayCircleIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-500">Using Payment Method</p>

                  <fieldset className="mt-4 flex-1">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {paymentMethods.map((notificationMethod) => (
                        <div
                          key={notificationMethod.id}
                          className="flex items-center"
                        >
                          <input
                            id={notificationMethod.id}
                            name="notification-method"
                            type="radio"
                            defaultChecked={notificationMethod.id === "visa"}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor={notificationMethod.id}
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                          >
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="relative pb-8">
            <span
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />

            <div className="relative flex space-x-3">
              <div>
                <span
                  className={classNames(
                    "bg-blue-500",
                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                  )}
                >
                  <ArrowsPointingOutIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-500">See Calculation</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="relative pb-8">
            <span
              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />

            <div className="relative flex space-x-3">
              <div>
                <span
                  className={classNames(
                    "bg-blue-500",
                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                  )}
                >
                  <MinusCircleIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-500">0.02 GBP Total Fees</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
