import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Frame from '../components/utils/Frame';
import { AEButton, LinkButton } from '../components/utils/Button';
import EventDetail from '../components/events/EventDetail';
import EventContact from '../components/events/EventContact';
import Block from '../components/events/Block';

const Layout = ({ event, description }) => {
  return (
    <>
      <Head>
        <title>{event.title.toUpperCase()} | Lakshya 2022</title>
        <link rel="icon" href="/icon.png" />
        <meta title="description" content="TechFest of L.D. College of Engineering" />
        <meta name={event.title} content={description} />
      </Head>
      <Navbar />
      <div className="flex sticky top-14 z-0 items-start justify-center">
        <Image src={event.banner} layout="intrinsic" width="1980" height="450" alt="banner" objectFit="cover" />
      </div>
      <Frame>
        <Script
          id="event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    if (typeof window !== 'undefined') {
    // browser code
    window.ae_plugin_lib_button_init = function () {
      try {
        (function (w, $) {
          if (typeof $ !== 'undefined') {
            
            var params = {
                hide_details: 0,
                auto_fill: 1,
                only_form: 1,
                platform: 'popup-modal',
              },
              req_cache = [],
              lib_loaded = false,
              ae_btn_text = '';
            w.open_ae_ticket_modal = function (event_id, ticket_id, e) {
              $(e.target).attr('disabled', 'disabled');
              ae_btn_text = $(e.target).html();
              $(e.target).text('Please wait...');
              if (typeof ticket_id !== '0') {
                params.r_ticketid = ticket_id;
                params.r_qty = 1;
              }
              if (typeof AE !== 'undefined') {
                AE.showTicketModal(event_id, params);
              } else if (lib_loaded === false) {
                req_cache.push({
                  event_id: event_id,
                  ticket_id: ticket_id,
                  event: e,
                });
              } else {
                console.log('Problem loading ae library');
              }
              setTimeout(function () {
                $(e.target).removeAttr('disabled');
                $(e.target).html(ae_btn_text);
                ae_btn_text = 'Participate';
              }, 5000);
            };

            $.getScript('https://allevents.in/scripts/public/ae-plugin-lib.js', function () {
              lib_loaded = true;
              if (req_cache.length > 0) {
                w.open_ae_ticket_modal(req_cache[0].event_id, req_cache[0].ticket_id, req_cache[0].event);
                req_cache = [];
              }
            });

            //function to bind click event
            var bind_ticket_book_click_event = function () {
              try {
                console.log('binding the event...');
                $('.ae-ticket-book-button')
                  .off('click.aeb')
                  .on('click.aeb', function (e) {
                    console.log('Opening booking widget...');
                    if ($(this).data('event-id') != undefined) {
                      var eventId = $(this).data('event-id');
                      var ticketId = $(this).data('ticket-id');
                      if (ticketId == undefined) ticketId = 0;
                      w.open_ae_ticket_modal(eventId, ticketId, event);
                    }
                  });
              } catch (e) {
                console.log(e);
              }
            };

            //binding on click event with multiple attempts
            bind_ticket_book_click_event();
            setTimeout(bind_ticket_book_click_event, 3000);
            setTimeout(bind_ticket_book_click_event, 5000);
            setTimeout(bind_ticket_book_click_event, 10000);
            setTimeout(bind_ticket_book_click_event, 20000);
          } else console.log('jQuery is Required.');
        })(window, jQuery);

        clearInterval(window.ae_plugin_lib_button_interval);
      } catch (e) {
        console.log(e);
      }
    };

    if (typeof jQuery === 'undefined') {
      window.ae_plugin_lib_jqcheck_attempt = 1;
      window.ae_plugin_lib_button_interval = setInterval(function () {
        //console.log("retrying to init aelib.");
        window.ae_plugin_lib_button_init();

        try {
          //load jquery from external script if not found on page
          if (window.ae_plugin_lib_jqcheck_attempt % 5 == 0 && typeof jQuery == 'undefined') {
            console.log('Loading jQuery...');
            var headTag = document.getElementsByTagName('head')[0];
            var jqTag = document.createElement('script');
            jqTag.type = 'text/javascript';
            jqTag.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
            headTag.appendChild(jqTag);
          }

          window.ae_plugin_lib_jqcheck_attempt++;
        } catch (e) {
          console.log(e);
        }
      }, 1000);
    } else {
      window.ae_plugin_lib_button_init();
    }
  }
  `,
          }}
        />
        <main className="flex -mt-4 lg:-mt-16 rounded-3xl bg-black bg-opacity-30 backdrop-blur-lg -m-4 p-6 lg:p-12 flex-col items-center z-40">
          <h2 className="text-3xl lg:text-6xl w-full md:w-2/3 font-bold mt-4 lg:mt-0 mb-12 text-center uppercase">
            {event.title}
          </h2>
          <AEButton type="orange" size="xl" ticketId={event.ticketId} />
          <div className="grid grid-cols-2 gap-4 mt-12 w-full">
            <div className="lg:col-span-1 col-span-2 flex">
              <EventDetail price={event.price} participants={event.participants} />
            </div>
            <div className="lg:col-span-1 col-span-2 flex">
              <EventContact />
            </div>
          </div>

          {event.overview && <Block title="Overview" data={event.overview} />}
          {event.eventStructure && <Block title="Event Structure" data={event.eventStructure} />}
          {event.rules && <Block title="Rules" data={event.rules} />}
          {event.criteria && <Block title="Judging Criteria" data={event.criteria} />}
          {event.materialRequired && <Block title="Material Required" data={event.materialRequired} />}
          {event.topics && <Block title="Topics" data={event.topics} />}
          {event.specifications && <Block title="Specifications" data={event.specifications} />}

          <LinkButton
            type="orange"
            size="xl"
            href="https://drive.google.com/file/d/1pt9Cn32fvJErpLdte0Fxw1p5gHmp1PkY/view?usp=sharing"
          >
            Download RuleBook
          </LinkButton>
        </main>
      </Frame>
      <Footer />
    </>
  );
};

export default Layout;
