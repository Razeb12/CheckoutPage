<template>
  <div>
    <article class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-3 order-md-2 mt-5 pt-5">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">
                  <img
                    src="../assets/PhotoRoom-20210218_012048.png"
                    alt=""
                    class="img-fluid img"
                  />
                </h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">
                  <img
                    src="../assets/PhotoRoom-20210218_012048.png"
                    alt=""
                    class="img-fluid img"
                  />
                </h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">
                  <img
                    src="../assets/PhotoRoom-20210218_012048.png"
                    alt=""
                    class="img-fluid img"
                  />
                </h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="submit" class="btn">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="col-11 col-sm-9 col-md-6 col-lg-6 col-xl-7 text-center p-0 mt-3 mb-2"
        >
          <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Order Confirmation</h2>
            <!-- <p>Fill all form field to go to next step</p> -->
            <form id="msform">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="active" id="account"><strong>Billing</strong></li>
                <li id="personal"><strong>Payment</strong></li>
                <li id="confirm"><strong>Finish</strong></li>
              </ul>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
              <!-- fieldsets -->
              <fieldset>
                <div class="form-card">
                  <h4 class="mb-3">Billing address</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="email"
                        >Email <span class="text-muted">(Optional)</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="address2"
                        >Address 2
                        <span class="text-muted">(Optional)</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div class="row">
                      <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select
                          class="custom-select d-block w-100"
                          id="country"
                          required
                        >
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select
                          class="custom-select d-block w-100"
                          id="state"
                          required
                        >
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="same-address"
                      />
                      <label class="custom-control-label" for="same-address"
                        >Shipping address is the same as my billing
                        address</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="save-info"
                      />
                      <label class="custom-control-label" for="save-info"
                        >Save this information for next time</label
                      >
                    </div>
                  </form>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
              </fieldset>
              <fieldset>
                <div class="form-card">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="fs-title">Secured Payment:</h2>
                    </div>
                    <div class="col-5">
                      <h2 class="steps">Step 2 - 3</h2>
                    </div>
                  </div>

                  <img
                    src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png"
                    class="img-fluid mx-5"
                  />
                  <img
                    src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png"
                    class="img-fluid"
                  />

                  <div class="row mt-4">
                    <div class="col-md-6 mb-3 ">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small class="text-muted"
                        >Full name as displayed on card</small
                      >
                      <div class="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="cc-number">Credit card number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <label for="cc-expiration">Expiration</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="cc-cvv">CVV</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Checkout"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                />
                <!-- <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit" 
                   
                    >
                      Continue to checkout
                    </button> -->
              </fieldset>
              <fieldset>
                <div class="form-card">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="fs-title">Finish:</h2>
                    </div>
                    <div class="col-5">
                      <h2 class="steps">Step 3 - 3</h2>
                    </div>
                  </div>
                  <br /><br />
                  <h2 class="purple-text text-center">
                    <strong>Please wait while you're redirected</strong>
                  </h2>
                  <br />
                  <div class="row justify-content-center">
                    <!-- <div class="col-3">
                      <img
                        src="https://i.imgur.com/GwStPmg.png"
                        class="fit-image"
                      />
                    </div> -->
                  </div>
                  <br /><br />
                  <div class="row justify-content-center">
                    <div class="col-7 text-center">
                      <h5 class="purple-text text-center">
                        Payment Processing
                      </h5>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  mounted() {
    $(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;

      setProgressBar(current);

      $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(++current);
      });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
      }

      $(".submit").click(function () {
        return false;
      });
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      "use strict";

      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");

          // Loop over them and prevent submission
          Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }

                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

html {
  height: 100%;
}
.img {
  height: 50px;
}
p {
  color: black;
}
.btn {
  background-color: black;
  color: white;
}
/* .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
.container {
  max-width: 960px;
} */

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}
.rounded {
  border-radius: 1rem;
}

.nav-pills .nav-link {
  color: rgb(173, 156, 156);
}

.nav-pills .nav-link.active {
  color: white;
}

input[type="radio"] {
  margin-right: 5px;
}

.bold {
  font-weight: bold;
}
#heading {
  text-transform: uppercase;
  color: black;
  font-weight: normal;
}

#msform {
  text-align: center;
  position: relative;
  margin-top: 20px;
}

#msform fieldset {
  background: white;
  border: 0 none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-bottom: 20px;
  position: relative;
}

.form-card {
  text-align: left;
}

#msform fieldset:not(:first-of-type) {
  display: none;
}

#msform input,
#msform textarea {
  padding: 8px 15px 8px 15px;
  border: 1px solid #ccc;
  border-radius: 0px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: black;
  background-color: white;
  font-size: 16px;
  letter-spacing: 1px;
}

#msform input:focus,
#msform textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid black;
  outline-width: 0;
}

#msform .action-button {
  width: 100px;
  background: black;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 0px 10px 5px;
  float: right;
}

/* #msform .action-button:hover,
#msform .action-button:focus {
  background-color: white;
  color: black;
} */

#msform .action-button-previous {
  width: 100px;
  background: #616161;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px 10px 0px;
  float: right;
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
  background-color: #000000;
}

.card {
  z-index: 0;
  border: none;
  position: relative;
}

.fs-title {
  font-size: 25px;
  color: black;
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
}

.purple-text {
  color: black;
  font-weight: normal;
}

.steps {
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: right;
}

.fieldlabels {
  color: gray;
  text-align: left;
}

#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  text-align: center;
  color: lightgrey;
}

#progressbar .active {
  color: black;
}

#progressbar li {
  list-style-type: none;
  font-size: 15px;
  width: 25%;
  float: left;
  position: relative;
  font-weight: 400;
}

#progressbar #account:before {
  font-family: FontAwesome;
  content: "\f13e";
}

#progressbar #personal:before {
  font-family: FontAwesome;
  content: "\f007";
}

#progressbar #payment:before {
  font-family: FontAwesome;
  content: "\f030";
}

#progressbar #confirm:before {
  font-family: FontAwesome;
  content: "\f00c";
}

#progressbar li:before {
  width: 50px;
  height: 50px;
  line-height: 45px;
  display: block;
  font-size: 20px;
  color: #ffffff;
  background: lightgray;
  border-radius: 50%;
  margin: 0 auto 10px auto;
  padding: 2px;
}

#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: lightgray;
  position: absolute;
  left: 0;
  top: 25px;
  z-index: -1;
}

#progressbar li.active:before,
#progressbar li.active:after {
  background: black;
}

.progress {
  height: 20px;
}

.progress-bar {
  background-color: black;

}

.fit-image {
  width: 100%;
  object-fit: cover;
}
</style>
