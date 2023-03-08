import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Assets() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md ">
      <ul role="list" className="divide-y divide-gray-200 ">
        <li>
          <a href="#!" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="truncate text-sm font-medium text-indigo-600">
                      36.777 FTM
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="truncate">$14.73 USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#!" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="truncate text-sm font-medium text-indigo-600">
                      36.777 FTM
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="truncate">$14.73 USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#!" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="truncate text-sm font-medium text-indigo-600">
                      0.4324 DAI
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="truncate">$0.4324 USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
