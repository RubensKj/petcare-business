import React, { useEffect } from 'react';

import SideBar from '../../Components/SideBar';
import Footer from '../../Components/Footer';
import FavoriteButton from '../../Components/FavoriteButton';
import AddressInfo from '../../Components/AddressInfo';
import StatusInfo from '../../Components/StatusInfo';
import Loading from '../../Components/Loading';

import PawLogo from '../../Assets/PawLogo';
import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import { useSelector } from 'react-redux';

import './styles.css';

export default function Preview() {
  const state = useSelector(state => state.Company);

  useEffect(() => {
    const rate = Math.floor(state.data.rate);
    for (var i = 0; i < rate; i++) {
      let paws = document.querySelectorAll(".paw-preview");
      paws[i].classList.add('faw-rating');
    }
  }, [state.data.rate])

  function selectItem(event) {
    let selectedDiv = event.currentTarget;
    selectedDiv.classList.toggle("selectedItem");
    console.log(selectedDiv);
  }

  const company = state.data;
  const isLoading = state.isLoading;
  console.log(state);

  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <div className="box-color-area" />
        <div className="content-preview">
          <div className="buttons-actions">
            <div className="actions">
              <FavoriteButton favorite={false} />
              <div className="report button-design" role="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                <button>Denunciar</button>
              </div>
            </div>
          </div>
          <div className="box-main-information">
            <div className="img-area">
              <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
            </div>
            <div className="title-joinedDate">
              <h1>{isLoading ? (<Loading />) : (company.companyName)}</h1>
              <div className="evaluation-paws-preview">
                <PawLogo className="paw-preview" />
                <PawLogo className="paw-preview" />
                <PawLogo className="paw-preview" />
                <PawLogo className="paw-preview" />
                <PawLogo className="paw-preview" />
                <span>{isLoading ? (<Loading text="..." />) : (company.rate === 5 ? ("5.0") : (company.rate))}</span>
              </div>
            </div>
            <div className="transion-small" />
            <div className="address-status">
              <div className="address-area">
                <h3>Endereço</h3>
                {isLoading ? (<Loading />) : (company.addresses ? (company.addresses.map(address => (
                  <AddressInfo key={address.id} text={address.street + ', ' + address.placeNumber + ' - ' + (address.complement ? (address.complement) : ('')) + address.neighborhood + ', ' + address.city + ' - ' + address.cep} />
                ))) : (
                    <AddressInfo text="Esta empresa não possui nenhum endereço." />
                  ))}
              </div>
              <div className="status-area">
                <h3>Horário</h3>
                {isLoading ? (<Loading />) : (<StatusInfo text={company.status} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="content-company">
          <div className="products-area">
            <div className="title-area">
              <h3>Serviços</h3>
            </div>
            <div className="transion-small" />
            <div className="grid-services">
              <div className="service" onClick={(event) => selectItem(event)}>
                <div className="service-information">
                  <div className="title-service">
                    <h3>Tosa</h3>
                  </div>
                  <div className="description-service">
                    <p>Gran Plus Gatos Castrados Frango e Arroz - 10kg- Ração premium especial indicada para gatos adultos e castrados.- Energia reduzida - indicado para gatos castrados ou que vivem em ambientes internos.- Ótima palatabilidade.- 100% satisfação garantida.</p>
                  </div>
                  <div className="price-service">
                    <p className="unity">R$</p>
                    <p>54.20</p>
                  </div>
                </div>
              </div>
              <div className="service" onClick={event => selectItem(event)}>
                <div className="service-information">
                  <div className="title-service">
                    <h3>Banho</h3>
                  </div>
                  <div className="description-service">
                    <p>Banho com shampoo malaco e pauladinha</p>
                  </div>
                  <div className="price-service">
                    <p className="unity">R$</p>
                    <p>24.20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-area">
              <h3>Produtos</h3>
            </div>
            <div className="transion-small" />
            <div className="grid-products">
              <a href="/produtos">
                <div className="product">
                  <div className="avatar-area">
                    <img src="https://image.flaticon.com/icons/png/512/194/194647.png" alt="Product Logo" />
                  </div>
                  <div className="product-information">
                    <div className="header-product">
                      <h3>Gran Plus</h3>
                      <p>Gran Plus Gatos Castrados Frango e Arroz - 10kg- Ração premium especial indicada para gatos adultos e castrados.- Energia reduzida - indicado para gatos castrados ou que vivem em ambientes internos.- Ótima palatabilidade.- 100% satisfação garantida.</p>
                    </div>
                    <div className="transion-small" />
                    <div className="footer-product">
                      <div className="product-price">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
                        <span>R$ 104.90</span>
                      </div>
                      <div className="product-weight">
                        <svg width="16" height="16" viewBox="0 0 50 60"><g id="024---Weighing-Fish" fill="none"><g id="Layer_11" transform="translate(3 1)"><path id="Rectangle-path" d="m10 14h4v5h-4z" fill="#3f51b5" /><path id="Rectangle-path" d="m30 14h4v5h-4z" fill="#3f51b5" /><path id="Shape" d="m36 20.06v34.94h-28v-34.94c-.01622988-.5407508.18729696-1.0650103.56414321-1.4531619.37684625-.3881517.89486259-.6070816 1.43585679-.6068381h24c.5409942-.0002435 1.0590105.2186864 1.4358568.6068381.3768462.3881516.5803731.9124111.5641432 1.4531619z" fill="#c81e1e" /><path id="Shape" d="m33 20.06v34.94h-25v-34.94c-.01622988-.5407508.18729696-1.0650103.56414321-1.4531619.37684625-.3881517.89486259-.6070816 1.43585679-.6068381h21c.5409942-.0002435 1.0590105.2186864 1.4358568.6068381.3768462.3881516.5803731.9124111.5641432 1.4531619z" fill="#f44335" /><path id="Shape" d="m38 38c-.0002526 8.6415739-6.8623104 15.7214733-15.499658 15.9917072s-15.92856446-6.3668566-16.46901999-14.9915136c-.54045553-8.6246569 5.86516359-16.120046 14.46867799-16.9301936 4.4846014-.4222913 8.9394685 1.0653375 12.2705025 4.0975302 3.3310341 3.0321926 5.2296292 7.3280298 5.2294975 11.8324698z" fill="#283593" /><ellipse id="Oval" cx="20.5" cy="38" fill="#3f51b5" rx="14.5" ry="15.93" /><path id="Shape" d="m34 38c0 6.627417-5.372583 12-12 12s-12-5.372583-12-12 5.372583-12 12-12 12 5.372583 12 12z" fill="#0377bc" /><path id="Shape" d="m30.88 29.92c-.544126 4.5106006-2.9801993 8.577191-6.7004237 11.1851637s-8.3737668 3.5113847-12.7995763 2.4848363c-2.83142192-5.3479586-1.2379655-11.9673574 3.717022-15.4409306 4.9549874-3.4735733 11.721019-2.71439 15.782978 1.7709306z" fill="#02a9f4" /><path id="Shape" d="m42 58h-40c-1.91 0-1-4 2-4h36c3 0 3.91 4 2 4z" fill="#283593" /><path id="Shape" d="m39 58h-37c-1.91 0-1-4 2-4h33c3 0 3.91 4 2 4z" fill="#3f51b5" /><path id="Shape" d="m37.17 8.76c-4.25 3.23-10 5.8-15.17 5.16-5.22-.46-9.69-3.27-12.17-5.16-.52591309-.43310546-.83058633-1.0787035-.83058633-1.76s.30467324-1.32689454.83058633-1.76c9.4-7.16 18.48-6.74 27.34 0 .5259131.43310546.8305863 1.0787035.8305863 1.76s-.3046732 1.32689454-.8305863 1.76z" fill="#00695c" /><path id="Shape" d="m34.17 8.76c-2.48 1.89-7 4.7-12.17 5.16-5.22-.46-9.69-3.27-12.17-5.16-.52591309-.43310546-.83058633-1.0787035-.83058633-1.76s.30467324-1.32689454.83058633-1.76c2.48-1.89 7-4.7 12.17-5.16 5.22.46 9.69 3.27 12.17 5.16.5259131.43310546.8305863 1.0787035.8305863 1.76s-.3046732 1.32689454-.8305863 1.76z" fill="#009688" /><path id="Shape" d="m2 5c-.00089652-.27967753.1153694-.54695009.32058683-.73696622.20521743-.19001614.48063073-.28540953.75941317-.26303378 3.35.23 5.92 1.48 5.92 3s-2.57 2.77-5.92 3c-.27878244.0223758-.55419574-.07301764-.75941317-.26303378-.20521743-.19001613-.32148335-.45728869-.32058683-.73696622z" fill="#009688" /><circle id="Oval" cx="22" cy="38" fill="#f44335" r="3" /></g><g id="Layer_2" fill="#000"><path id="Shape" d="m27.17 26.18c-.3572656-.0607352-.7197944.0737422-.9510254.3527757s-.2960346.6602313-.17 1c.1260346.3397686.4237598.5864891.7810254.6472243 5.6394626.9514606 9.6090067 6.0657113 9.1316103 11.7649137s-5.2424482 10.0817955-10.9616103 10.0817955-10.4842139-4.3825931-10.9616103-10.0817955 3.4921477-10.8134531 9.1316103-11.7649137c.5522847-.0938884.9238884-.6177153.83-1.17s-.6177153-.9238884-1.17-.83c-6.662784 1.1279983-11.3503099 7.1725853-10.784322 13.9064348s6.1967284 11.9111742 12.954322 11.9111742 12.3883341-5.1773247 12.954322-11.9111742-4.121538-12.7784365-10.784322-13.9064348z" /><path id="Shape" d="m49 14h-14c2.0303759-.9311672 3.9491838-2.0884902 5.72-3.45.7765689-.61852473 1.2289658-1.55720992 1.2289658-2.55s-.4523969-1.93147527-1.2289658-2.55c-2.61-2.04-8-5.45-14.22-5.45s-11.61 3.41-14.27 5.45c-.1417719.11030024-.2723959.23422555-.39.37-1.6716983-1.162611-3.65390234-1.7966376-5.69-1.82-.55590696-.041813-1.10403838.15029305-1.51221582.52999299-.40817744.37969995-.63935446.91253198-.63778418 1.47000701v4c-.00157028.557475.22960674 1.0903071.63778418 1.470007.40817744.3797.95630886.571806 1.51221582.529993 2.03609766-.0233624 4.0183017-.657389 5.69-1.82 1.8687516 1.5493607 3.9414541 2.8347054 6.16 3.82h-17c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h11v2.18c-1.1957287.4227483-1.9964356 1.5517451-2 2.82v10c-2.68457183 4.9955087-2.68457183 11.0044913 0 16v7h-3c-2.209139 0-4 1.790861-4 4 0 1.1045695.8954305 2 2 2h40c1.1045695 0 2-.8954305 2-2 0-2.209139-1.790861-4-4-4h-3v-7c2.6845718-4.9955087 2.6845718-11.0044913 0-16v-10c-.0035644-1.2682549-.8042713-2.3972517-2-2.82v-2.18h11c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1zm-43-4v-4c3.32.22 5 1.4 5 2s-1.67 1.78-5 2zm7.44-1c-.281616-.23939948-.4439118-.590379-.4439118-.96s.1622958-.72060052.4439118-.96c2.46-1.92 7.43-5.08 13.06-5.08s10.6 3.16 13.06 5c.281616.23939948.4439118.590379.4439118.96s-.1622958.72060052-.4439118.96c-2.46 1.88-7.43 5-13.06 5s-10.6-3.08-13.06-4.92zm18.56 7v2h-14v-2zm-16 0v2h-2v-2zm-4 33.93c1.3907564 1.6642348 3.0881579 3.0459196 5 4.07h-5zm33 8.07h-40c0-1.1045695.8954305-2 2-2h36c1.1045695 0 2 .8954305 2 2zm-7-4h-5c1.9118421-1.0240804 3.6092436-2.4057652 5-4.07zm-13 0c-8.2842712 0-15-6.7157288-15-15s6.7157288-15 15-15 15 6.7157288 15 15-6.7157288 15-15 15zm-13-25.93v-7.07c0-.5522847.4477153-1 1-1h24c.5522847 0 1 .4477153 1 1v7.07c-3.2300909-3.8332529-7.9872847-6.0455488-13-6.0455488s-9.7699091 2.2122959-13 6.0455488zm24-10.07h-2v-2h2z" /><path id="Shape" d="m22.3 40.29-1 1c-.2871614.2848091-.3744903.714552-.2212679 1.0888524s.5168238.6194518.9212679.6211476c.53 0 .67-.26 1.71-1.3 1.1449301.5473673 2.5104186.3151142 3.41-.58.8951142-.8995814 1.1273673-2.2650699.58-3.41l3-3c.2536586-.2536586.3527235-.623374.259878-.969878-.0928454-.3465041-.3634959-.6171546-.71-.71-.346504-.0928455-.7162194.0062194-.969878.259878l-3 3c-1.1454036-.5337334-2.5024539-.2925057-3.3937497.603269-.8912959.8957747-1.1257183 2.2540172-.5862503 3.396731zm2-2c.3921222-.3921222 1.0278778-.3921222 1.42 0s.3921222 1.0278778 0 1.42c-.1877666.1893127-.4433625.2957983-.71.2957983s-.5222334-.1064856-.71-.2957983c-.1906411-.1864301-.298931-.4412772-.3008087-.7079168-.0018778-.2666396.1028122-.5229867.2908087-.7120832z" /><path id="Shape" d="m31.28 5.3c-.1893127.1877666-.2957983.44336246-.2957983.71s.1064856.5222334.2957983.71c.4363176.27943282.7002439.76187284.7002439 1.28s-.2639263 1.00056718-.7002439 1.28c-.2572312.25008591-.3615034.61840605-.2735383.9662178.0879652.3478117.3548036.6222742.7.72s.7163071.0038681.9735383-.2462178c.8240066-.6624498 1.3032901-1.66272679 1.3032901-2.72s-.4792835-2.05755021-1.3032901-2.72c-.3942669-.37564275-1.0166244-.36675193-1.4.02z" /></g></g></svg>
                        <span>10 kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="button-load-more">
              <button>Carregar mais pet shops</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
