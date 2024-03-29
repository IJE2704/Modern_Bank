import React from "react";
import styles from "../style";
import { clients } from "../Constants/data";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map(client=>(
            <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
              <img className="sm:min-w-[192px] w-[100px] object-contain" src={client.logo} alt="" />
            </div>
          )) 
        }
      </div>
    </section>
  );
};

export default Clients;
