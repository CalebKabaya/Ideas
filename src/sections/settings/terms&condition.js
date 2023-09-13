import { useCallback } from 'react';


export const Notifications = () => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 px-8">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1096px] text-lg font-semibold text-left text-[#101828]">
            Teams And Conditions
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1096px] text-sm text-left text-[#475467]">
            We may still send you important notifications about your account outside of your
            notification settings.
          </p>
        </div>
      </div>
      <svg
        width={1096}
        height={1}
        viewBox="0 0 1096 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="self-stretch flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M1096 1H0V0H1096V1Z" fill="#EAECF0" />
      </svg>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16 pb-24 bg-white">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1160px] gap-16 px-8">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-12">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[720px]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi
                eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam
                enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt.
                At feugiat sapien varius id.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat
                lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at
                habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-10" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-3xl font-semibold text-left text-[#101828]">
              What information do we collect?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-5" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
                In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor
                integer aliquam in vitae malesuada fringilla.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo
                consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus
                consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
                posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
                neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                eget nunc lectus in tellus, pharetra, porttitor.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
                pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                congue felis elit erat nam nibh orci.
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-10" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-3xl font-semibold text-left text-[#101828]">
              How do we use your information?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-5" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
                In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor
                integer aliquam in vitae malesuada fringilla.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo
                consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus
                consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate
                posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
                neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                eget nunc lectus in tellus, pharetra, porttitor.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
                pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                congue felis elit erat nam nibh orci.
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-8" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-2xl font-semibold text-left text-[#101828]">
              Do we use cookies and other tracking technologies?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-4" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
              ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
              Maecenas est morbi mattis id in ac pellentesque ac.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-8" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-2xl font-semibold text-left text-[#101828]">
              How long do we keep your information?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-4" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
              ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
              Maecenas est morbi mattis id in ac pellentesque ac.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-8" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-2xl font-semibold text-left text-[#101828]">
              How do we keep your information safe?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-4" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
              ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
              Maecenas est morbi mattis id in ac pellentesque ac.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-10" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-3xl font-semibold text-left text-[#101828]">
              What are your privacy rights?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-5" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
              ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
              Maecenas est morbi mattis id in ac pellentesque ac.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-8" />
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-2xl font-semibold text-left text-[#101828]">
              How can you contact us about this policy?
            </p>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[720px] h-4" />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit
                lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa
                ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt.
                Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate
                hac elementum gravida cursus dis.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Lectus id duis vitae porttitor enim gravida morbi.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in
                vitae placerat.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[720px] text-lg text-left text-[#475467]">
                Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
