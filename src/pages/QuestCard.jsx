import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js"; // Import CryptoJS
import { animateScroll as scroll } from "react-scroll";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const [questionStatus, setQuestionStatus] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 150, smooth: true });
  };
  // Define your secret key for decryption
  const decryptionKey = "absd*U#(Eajdn";

  // Encrypted data obtained from pre-encryption step
  const encryptedData =
    "U2FsdGVkX189R8JzKkPve3I8Qv6lgKDPVC8JmvA9VfJwmBMalSmSVn2n0MS90sTWGUw2doUXO6XlmU3GEyFlu733EwcmQ2cjriw26mGjZRTB8ZSu0MlhcEpbF4AmTo4EyPNSBAT2R1upcLfRrHqiOgQ27lKVndoN72/d+zn7yabq0IIf6BbAI4/9O7IkoPBAaTL24gxjJxU3eASz998VxMysqsX1hah0H1iEdR8EyItau1ymxqavp0i+SGmkckpF0UWjbE4HaQ+BFuROVNA8N5NotYWBktTbAAzf0Wfirz0xRzpmXaAUiMK6jKrNAVrAs5cCPAlXx8jA2NlHfUysePAbGsakKZ1ZuSxDib9H6C/jBmB850/OAA3dUr5feUhCfGaGbqE+qgOZ79oGUF/P3U0M2zt6nVZfol9aooowd2yBS0US234bD92pW1F36DV1lpPNj0GIz6X0XZPIv/S8x2hI37+lXRLuO9oPpyG+6nj3H2DOsF/N7FVP4R4gWqpKUgWyHVthVG5ZTRNDr3S1pgWjxhmLgVdeZ2SwumtHvarae65CtkwFXQXAO57cIKLFjsd9AjDv+KlcV3OJxWA9XFqunGARN+/C7MTE2Tf/S4WYVCxcHbLj0TRHU6144wX0XRTrm8SBAD5orsROTxLyhqJJgveG0XvjN4vyCVpzQ3AgZPg9z2IIgqUaq1mYsSby9FcEwMMss071cMwL7B5gMGGk/mwey1yT+tfUyFEZPlju20435IZGXn3yt5HAPxgxsZr8fSlfendu/lysGvd4PkY5GBpCGUREOJUaE2ISDDb/YoBSUSSf+GiJq0/fei69ejN81Gw4gF9lgTExDCs7BlDSSs4/2kl2tizT8dhPU1KNNW5lJd1vQPonUB9BKCuJDlEGgcWMakO7YCg0AQHMMg/U7de92vmWvB9WsDzDtr/njhau0aAprCV6De3fkpJrE0en14T1OzR0wbeC0XLhZDd7nw4G7bm8jUr6KQZCu5nxbl8/dvt3cwxsnkqeS3vDogEEUVWOk6pODS1ubOQgDKGqP8iaFkUlw7iB2KmyLZ+gKLrFwqd07buUjQl+cleszCYWk3HrgCPbD4E4koq42i95AIbkte2kIMZVvH9dKdvO1dY1JcKr47OmrkDiAtGioGyd6kpQXiCHEihySfuFAxJhFbCvPG751LGmjqHUOkRMaPXK/eJrMxkwmQDQttC1qJnSsyk8bfNto/CDC1J6o2hCOQO9MyAg4SpLtiCGbI6GW0W/5aZuLb3ZYmE3DdYXsmvPcvzN386hWII4ywJMt53dIdI103FpspD9lxVZmYa3wMg3/Ij7vOtVqa5dQJbLv6Ts1V4AEbW85VV9wdq5ZoDEv9UYem19f3b2YqsS7F2+HM+zVWQleavOfz5HsfjpwSHiVGjqt6HVpUD2AyoMFJfs5NKOclySZ0nBxTK8tktW0n/7ReHgtof0oIxxl+Bb9XCvzXdi8CztT9xzVwcJlIOB0//7GVT3hRUNp5nse4ezjFtV7queZ7/FrsowPq+ILu8a+EJxM+YJcorqSuYO1nIWHw5oEG/Be/qWA4Kx5xCrOm9anNmE4GU/5cHcjw59SOnGdtqnGbWuF+lpfEWZgCh80VgRoZrP3xLHdS+tZ8DxuBlMYwQYRvtUu/jY3uRVxKky/+rffZWVme2gJi8hzJrYzXTLwJuZm04Dgtkbywdjl9BbJ58ZRJBPM4DIp0WLH4KBFJr8QgJ0dZpB2iSnWH6AP+G/p4VlwKj05T6/5ovwkod97HG3HVLIcUXiN4il/hG/cMaSbOWvahlCP2WEl96UFLcXda/8Y8OzQq3RNCDz7rfUP2YQgAMrMTMiT2BRBnQzZqLnqoe68kyCqoPGPVEgLeQtzx9Kyub9pV+CBvcla6VQ/MwYxLxFay0/u6exEUTSf0xIRXCPP8tAUc2+v/vb5OG71VJwaQyjdk/YMuiSz8LM9Tb+IJ0ZBF5PfNcCMXs2vwC5osNYEJ9dMDJXtKyZzMxe/Ibf2CLfRQVHik/Gjm3BZa/7PQ0ef34SnhPZygu8VqwxwMX5/9+vij2bQsR2AkygQEF+tOEFGSfUACwl+aBgUVAYMUNK27bLK+ihUphNxyiSYMQMdmueQemPluD4TC6hPtTJ6WP7ewHciGndgXW5xRcB8o0GRZBIFRj3kDpPpKh1z7rrcaw1P47PBoU3edu0tCs4ABGp5+EOvK6U/WLgA+vXOO+eOowtvWtqn/fPHe9O2XlABIIsDHUau+70d5ETwZBNMAzNyz0m02C4gi2CnsurELBbwSoQpQ3RsMHfUZvHG1ksiFkWu1ZNPfIAXtFJLdzuLCZqsyW975WzyH42zVWuDghLGiGK/DXrmNIcNYAYC6BShHVcQ0SkE4OcipLYpPxDWzsRFgwnrSxkXc8pB30H0i/P0NrMIG7Ytm0j75bbX0f6k06KRylwGogs4CAUtzWkMTtxmLdgn85zacLngHfLLNszP4i7pm1fNoWbNdbJ9UzYaRBnyvZJ/tTjV1KOV8uC3sezf0+Y9bg6WqS1KJmmj6wfXR6aPwp5rBWt8JQhHK1y0dGKpPbXMS2Xe5PVUQ0IcQ/2dtt1g4+GfgAFkg05m+dY8hlMrI1HScLXwKNFEC9TmPAUPNTgcRTa4H5lgllL+h0yBh+db8s/HsMNSp9q4T4PU2KOGsbfVkbHElDkz7zTnnI5UcYYMS+lfDyvm+w0vxcBCsy2XVoEw4WVqui6TGA7XPsa946UFKqeSqMdYXUCB11BUggnk2OsKoSzs9e1haCQgRo6T6+RhyntQbQs8rEKJb+nrL9oSNvbkazeMIoSjhdh5FIithw6pZM5KoRCDTd0ErK2TKlm8+MyQGGGJNBgWL+xMWQeXIqtM/8NhYzuP/otyNqUpEnbIvHFrXzC73rUrCCmADpLAJiT+Xi91crjAadQfJyYE2MGsDqjwobPLUK3Ci8Jckf5Cuw0t8Kjgdkg7ZRPqrqCEqEE2AVd0EkH5MYT0QkFs7016O90f+utE65X3d/2iMr4TdcoPFuPOOoVcC6eRfpok/OF+Q42FwsRMvv+5MSThzKJrjuY3d67waJF2Sa3CAiyl84l/mn6zpoql0Uvl3Q4HML54eKTfKGoWxIFpaxqLizyiJCQrDPZ/+7s+BqvHU9ywhO7GQUplu6P1JfKahElKXuRIj1IgHa7bTUUL00mkH8ms6LPSmyDsManNHMBnQD5aAdd0qjcMAs4ZtV6xNu3ufXcRHKT/PpcY3C8YxLxk0MF4matTSI5/PhUyKhNGVjXvMbDbIG9Dq7BDVah1F3Mc2QoDwTzGVLIlYigo//Q/UZmBW+Ld2QPMhdNjTt2wLJkDlhA7BvyLJPttKNCJdrQk66WoFMS/1dHqphYJeO6bHCoeL5p4PJmZJnm/0fT/13iZtEFceNPLyytaqzqXYhLGvpvFiPV9efNFciyYr3zfzsRBxDK5Z2MybntCTxJKPZ3fcgytAetLKnAjpH18PHwRfvXXXklkSWD2CzuKRtMPbxDZpsJCaAxesegCFr0eZ7TKug/Xu886cBS9o6YrnD/WQKZDXzW4/5kSZbK6YWsIiOSp905SPMeexADUqqKLeR89z1we265KwDMWMZloRutHmVNDxDpfD+I63mPN7Eu2AvjHLQ5Xsnws9OKbdHRQnPILnB8zf+KJbm1Y96eRjDMxiomcI422B1rWCEDINtVxWsNHPC6axyt8X5ALdzvsroy2HE9v792U9sodnC/KFl6qTgF5HMu9yJ0OFEU/i6u+zvQt7aLXTAXbuHOS/gUVzFTgIwyvQj+Ds/ujom+EzKHv/D1pMcvI8SJNB2fZ62qe/O+xrqy/aqrjbD2xTPB3xP6e71oZXPq+HiYELp+h5+0QEA+SP2lLcA0m/NRdxaSd1I8Pvvp/ru3t+nfAf5cdM65ESvydTm17+hSBtVK73cFncbfdmh3uCDHeCE4CdaRKLSCDaPJt7pZOXnPosXQi9TD8aTt/sLv5odmEcktuJ3tD/FAK9Re3KtnaTLIBjjIiIqkHEPfSl2V6AKEIvK8kGiUWo3qV3uby5bfZ+6uhuc1RAV74RRRlaVCuM/WYXn7rxM6dc16AxPib6gaTPAhG6ZiQOZ1wJxs9yv6iArh9Pu0k18ue1lsuYiZLmcxo2Lr9zwp3jBlLUpOG6OEXyjeoVF2rVz/VZ4qG83ODs2xuTieecLlTFxEfl+UvGxk6iYMfttsOFFfegY5PM0JhpZah6Fy4x4m2zBXdkk4cMhyxRDaymRZP5Lzkf2hw4cjVUtwNGAe+s1BZJLy/7YVu/NkwucuJICCo1lA1oUC0MY7elm6hJVXHA2LBZY9G3wxsbkEF0aK2jjLkLuAA+ettxUo6t1OkicKu6MQUA871FbJifm1AKJ4f1zO3EMGasQptkkxCihYDeWdco+VAIzUUNMNsa3/kjwkK22ORGr3ZihhS/wZbFc5InnpQd2ikZQalFXyvdzYsAgmoxp2H5P7+rYUA5KnUOTdG3jarNhGlred0yNY2vNnCDKl3TTeWGD1albYnwSqNj99S1iyaJC0IVUzapgBixIA76lh50aghEAiABWy5uLEAtniKk/H0Zupt6EumqruvnQ8/yl7k8eIJq+1atgUCDkhtSpF6Et9jbvqfDPRAEmyvRGJjHeaQjnGBL0k73v3eZCqgcPGtcfBz6lqW80EFfA7b15wB+OeIWO9GJ1HJ+W1qqaJ1YkpLxPTkB0hWt5ZRBZikl12v9TjaWdIKd75IIkRUZBq1B0JfnDFjbpMAz3+JStAmDWRjGvn3B+xrULXYIgRXM1QO7xb/tQcxzRx/w1P8Z0XiqksdeR8y+bufvgBPOKWT/3Rb9uYA2XGqTyNrgmedkfnY+Uj/dmuh6x0Iy/ifJAVUbSj1ss/lcL9LfFgUnWdUjlhR3fFTGaXOvtgyziA7G0bh1RXSA3oni61jkACeg4KrL7lQ/MbKc1/YjI5u7+Flw/tlxBhRTtk09zxWpWVABSBB5kUdSZrTKCqX9/fMxBisNzABTPA0XeKwcZzdCUmXCjh3byArJhnjY4y9cz2Db5CfyCx2lyixOal69me7mttti+eC7rh8pACP6CYg8J2Mx0v5d+y/hYmyuKDcYSqwud7P1Tjbm23lEzvwR9QzDvLXYTYoFDrglGad8puW3QvyjfW2wQOC4uPEgNj2tQnfTndfYlKQSsBM2c6RoxNfC2kChaleoUadozLIwvHkn1IBZTr8eR3DlYgrvtclPyEPEWTLArBE56/zpd9pakSOr1kRgrqP5FzS7wASJlYqpD8F5iWbEhIhJgxFNbosLzh7XGeftgMRpw79NXRa4dQ0e/DjzyywACdjKrtCQzLpZNPwZynw0E3rJOV2GnjnxOLYxOnxPDJh9ZBOix2rWYWSIj71opGjl3oyKdwE5UANlZgs7SYV0BUmjC3jB882zHnYjst9VFzHCQhrIjVpN+24X5Xy4i/uUGvL3IeGfdi21Ix7wBD8D+lMfTprYur3REDBhesbjMSkmrXYCQVuFbPRZ7XoMvYcpJFkcqkY3AI3fiR5oGO051g+dxUXfEU8gxbUUamio3n/kaLHva36e7E+j+E/YpygYuKZqwa/vfDcaXEV+q33iBbYwK1kfxEXjAnEAtCR0mndf2qred54COEYB2IJhNHH5WpUu5I2EkhDsJvls5LvqIqfvkiNktZ1A9bpWqwYENyqkKxaZYPw2qO4O0o1IJncOunmrxWgIYUlLJsmHPvKCIyiUNNv3kB7oZrvFmFRdupK5Xojar30IxPZ80dssd4G+PRDoJbK9ztuNthbY/4JWfdwY0oI8LXkrD8f7+n1MX/vjvoDrE+bU3J9skT+2lbVLbslI277ypzBK0TUcSXvVN2K+5Ze4s7jEY/rMgG2HzK+UejZXJLSPANC6E/yGJZ+XE3nQHo+oIaoQMlK3skjGNScPjlKJwyytMjJagozvrUCH3um21ACWfkfCSL6Q70yqMiTJ/yNE4JByGqOa8mr8QJMUA8KqhkjsFhtxzye89YhYDRlPjY+9U5p5y2thClBjJmdPlLpaXnCZaSP70vRvrTXBh845EEcgYU9x6w70iuxg0L/22OZokqEy8c8eyBOgGepYKwGFhjQmam/bKqtu2kZ9RWVSvOQA741hDQVtIUZ2uSyH/x1TmvBcv2XqPdCws/hbB7s4RIYh5biQtIGXQ5BNS92LfliTo449w4Op2NPZ0eo71UFbJ9e0w61/JwBz6mIWPt+zG2cUyHq9NdHviGhl3dVGPsWKyrc4v4UzoHWZiblIDc/1iL5jzLpOr+/ngdV51i1+HWO1bWFCCqcxUrY/i6I0EdXlQNi5z7gy9YSNV9jT06n9/SOKHtKiItoByy9mTvi2HQs/3wqGS2uCKNq14aiZEEfTh9D+UsmOfCcSxaEWrWROFB3pazGEzQ6JK6qN85E43sg6HE8trStFpD6NUky7ub1g2WN2vn9M+GDMm56eeY0OaqpaCE+0OETd6MkucUvUCP0+eXs0HJ5Qy9I3/qSuTj+7cN8obZ5ZJoA8BCD5OvV/I0nLUeFg6zvdZs/5C1Edn/9PjeQZOJpWxQISwGQvVzlwbnJ5VJY8CxPUBudIkjOzV/XEmfPpAIJ3YXygvcGodOrv9vN+x7zQMLAcNTLkhpasoWUQ8G+KmjeF1N9j+HD+0IPpPyklJSpPU0s6Bey1d5gSYI/yiTXeV1h/CjVTeZWU9d2R7F9f26aJY/CHfRuW1cy1dBxe6Wx6/PaEmGL6O9D3IIxbLnNCypRRR02OsnTAZHPk+QRKnsmZIAPfn/8rFmMiTv+xF3uuS5/Mou6zl75CkFSuwrUGssthuTFUaCzH3cwmcYAjX4x4xa4y3u+al/Ts7yRQ20CM2aP8VdDDzbsQLk86Fi+O8W/UUBKQHSf7SH1dyg8gi2axgAWpmmk/6yifYQC8jJJvA1hI9Iz6E8O+6EICR2vFD7l/1mUgGrDvk5IM1JQShzXGRpChMfy5TX4TuGVVokVaNF5/qz+L95NHAs+6i7bDtu8zZedrTK3BdA4T36K2kgxX3k2rPD4cDRUpkSg0zB+kAcbsYJIHN90bS2ilDgVkYmFHRD4er1uh+drHvXUolCAcc/+dR+wLybxZJgeVMzCb5YcPVyI+0BUAQoKcTFVOB0gII/3oUMOD2d83G+VRm3yrwtBknb3LipkQakOvoz0CXSSZ32Yfmj5v6LZ9D4gbcE/o57S5sRMZ2HZBG7woEqVB6IY/LREynlTXR6w6v/z4B3dMEO+zK+v/P6fA7IHefW5+KHemUly1DkhHAU+kLNlCeGKChqwA/tSnKJRY/T0JSdJfUcKu1i7Oyih7lb2oBET49xM0IwY30fZqucxKU+UMXuTyR40cF+L//e8kZ1YNJg7JfU6+WQM84Hrrxq9fVkZ2IhihPyqTdPFKhLhNTCYzeSWwU95aLs3xiEcPoBLllD2nHcJv2kJeUV0NkA7YN1N/IN5euJJSFYixlE7B1tE4avHq4XZ88wZrP4ZeMzozrqZ9b2/4zoMlpxeCJPHTUC6qq2yBQNyo4obslYO3OTOYVmIxmoGTVJTZv4fq0/aTdUUGQ2Xi8SdARNH/PVTiTJVhBKJZhRt4C79Fbgn0cqFq/iVNYOL6IzWNsJy9b1XEEgqGULX3+BSzffMgMD8H/zoJS5DcSx4zjzZ4h3iiaKsaeoDTy+oAxvxu20ijIEqq562B1/6kmYsS/3nzGeo3orTstOJNwwJ7h4QK2ekypXo1dbm6XyGctBkf+v4DoA3l+QVkmLeYD1l3IbT6YyyDRNawUEY+8NA0wfIhkATn17OwrGllQ48V0XX7vGeE8M6Jt0/VVv7OWhys5rUuL2szStdYXdWC+fz3kZ3Mky+Z8eH2DcQPDkIcepPGUKlEDAkWbXMA6CjhYGi+jWkOJfiTPaMgQTsDzdtw5IhWASFA9Cl5x5qbuVyUknEEgPc1sjbuQcaWpF7A52BbJLKkTfsYkwlGVkOyrR0OL08StDuelw80iR7bY4pEJSDn4glTWPNjxX8hVZky9NGDYSKR+Xrnoq3ZmaPvrFgXbynp1oLOz+P4bonXria6DmUxg5bNGzxomTuAhRf/zwS7znegfU1flPWjWzMfeLu1pcKlDPxRwFyXU5uDUteshjcCPwWlIVGIvGYnD1+otdfjQR13L0+cMhKnuuFrhiZHiTDNZK0ofyirW4Z3aERhbhIT/CxcV7FS8czH2tCELiym4M9ccFhWW4yJfmkFXTic4NmCDcJBcsvekJ4FUKQ7wzvtaF/Po4RLBi6CqRR6EDs2/rKbpyh4glCdWjdPXkY74M1AOqmKNQsjxlnenWCNT4vFOqHQnL8RK4R1uEgzkYJ27o7ccEq1BmTDQ10Yc2myM0A64cue1Pm/cqdix+AdYmmfMHcs5twGtWCPvFsXFw0TgIBd1mPkvMs+Trrkop9mZOFEh4vFO88hwouLSdyiHMmPHc5YBqlbs2VN+cZCh4TMF+qDjoC2sV6hjU9z/IZKxgcZ42Hvxhj3LgAPrqHOlTmII+1Y95/INh8FllvuJDM9zgyb4y/poR+/Ung5nrsKjOXXxS2v1lAlFEz9+L+qiLnyZMp6mP4nBiwINhNn33q4WMxiG7F39JK/mLTGxF1F8WpdY1cb8+3XJaOAWyJQog+p8yO6FFziQAJbX6PaYJ/kl0OErpQAaCK2I5F+rxcHPFV0Z+CTVejX6C8I+wgPXwzvzl5YSunGUCTZgHWcAdiV/S4900MBMPIr1N4pNXSHcvtTz+QyMyYKtYMGaJZBBw0MTfIFbkV20Gfae6o500g7f6cnoQIkP94KkoDea4gHUUvlLg53fKyoAnhSfqg3QPaSzuPR4FKqDrWNhZfaVlHOvGQNpRgk528H+UrGzWCiwJV7t6QrAK/GxHXjO5cm3RGIQ7Et52KiDD/CJLVsF1IDM0LaDfBTN26llE9yAe43caDY6RnVayqnTaWdYdZYjFYaHIIyeYdYORZ31GcKjD6wTb5MPDQ/ldFSlogPMf/7i33Sz0Y7E+6Eum0WIikGrHiA5a8Z3gAgtumrIPUZyKzY3E9+i7oO81f5dRWl9PVrZ2Jx0kzudOqtIeVllCfXWQkxoYsVWrMsGfW/PA/V4irrWdAVGw7ezNo7e229irqvyrfuJy7+rwXIDiChnHTqW+k1/Ad5VhCCXJ9ofUFKY/T9lPc7fNCmup7EM8gvcRnwsdM1Sy9NcVXDGoG73h9rddM1xHLIgLFT2Npp73FB12nEBm/e7l2TgKHv1X6oMPZSo0uvo2PhTcYfxWJB6t3zzuYtHqj81p0N13sE762x34p6EmdY7g9jB/NTQGMcne3Y2qOdT/TlSTHsZ5VKsXyCraLVfJYUpEx/3f4qyC1X+/VDuMY8/5F/vxsRxy+EXse9TeFgyqImANVPfEj1LY5NZXPgJrAefiY9gzk1MtGO1Z4VKNuALgrJprl2M8K7fb+9C3pimmXDeEunQdCGuU3u7R5xm6K5SeOQ77uYuXVy5ZzyMonxXAfUMv/OhUCH6En8VGgIGzln7CGqN2SLrFiy8PRyB+NTh+G8j/c89zoEc8A/mylfYyEcN6ub9WICLOLfgsGysWE+eQRy+L0sxlOgcrU+4CSS6v6pGKydYyDJPtXc9UrEOq9/Y8c48SIfvgOylV6HkyUeGILZK8q1m4F4LonfBPsakVOo5B2FI7B8sw3YwzW5t+ah4A8U8wx6Akq1vOTBy+AMphrfd83+kTQIYbT6Vv5v28RKzjW4LNyqiB2WZ05jXxlEIr8U3HWgXHeI006ifJf+46glMPE6OhwMtlgyPckFkdUZ8Xh1b92iioKtx/9UkfDJINFVip9Qn7fmJ0EPLJtaCEEJ4A04C3pHnDMtvDhINorNiWg0WJPZzZs078MSs7YhXbt8OpvX52zhs8fHK1hfHlQsrEMZnSMtMDigv/BZYkOL0W36MEYitQFuAILMp5V7aTkl5agUXlpurfFTNntSzFa9ebsLJYo8bhkfu5HDe2IhrYpX4+++/deiYsagkcGAaylxWXoY5/N0lRz5E4tHatIi3kyCqZkoDi9wj0zSfT39oJ3cDz4sg5mrK/6cY6UEQmbb5qQYapzZNrBZRYpnOzMjLMZqYCcf2Zm0daOOFMIWkENkC+eGVrusiySZkUS7klTZOlF0MP8h4vhfYl2mhbkJEVHcDJ9ck86VNq5zhRrgHfBu8cqsnb6f2T7nsDjrkRsnve+mN38KpnrcMK4bQoobOQoWaLgQErVUMTXtoATqyJ9U9/WVobLiiBP9WoVJs1xqV0TG8X+/S+3KQCoqRQ3d5ZgiE/4G+mJFql0KluUOmrtxcT1J+0LVZDgceefCcrxDV4eGVtgtQmqwZEF7ZCi0eNTNlKuW9NTqiu8vbxwLIb4B3Ob6VlbOMN3MX1iUgvwJzkJUiAiVFlSpdLHUmk9zrVlcMT7AvMsThnUvz1VMlHIo1EgdGxZRXurxEbYfg4KMIw/fAXYSJ2LiGLAqqvtHEqALzSo8vU/iD4S1K2znUqPGSZDHrAxHlGlSL4g7w2VWZQhBKTJLffu5+MVNPxwi3KgmsulIhfF0N3tuULB1yDn++TcTpm+ibcCHrlZ20XObFQEIbHg99o0r+3rZMwyIW+N8K80XZs1P/OgytU1IAYuKBEg/FJGVYsvOEZ+DWJNuLY1zW9/DhggS1QL9So535kvlL45XP0jTUvjgRl00c8MpKaVt2L3H+4loLqmpplU3fgP6sIEIzyxWrLhXJGaSBDYIywzA3yuBhp2Qqg0obeRooOJ08aoxDUVvMj60s1toW6H2Tsk5p6C/ydtZnsoinW+IJkxpxKaQbHJOlFYnKgOFHR1vC5VsmKKwKRxNBudd/fi7+puLyhGd32vsTMUGTh42DnIwyNVZR8cthpBW2mwkN95+wsIcn8HsJI9HNJgmhec4hKvATz/k98lOEIkf980uiKNZ65JKMxRN35lCa66Q9U6JRzN3YsRUOyUngJRt930fw/v9g6f2pxcTkb1/iZWwEGIWgicSAutI+3UUjZWZXEWFSVtI/d4Hf1iRdMTeGWBRKKOZCqxlmQvfemq+P66Tmne4DUsbwPGHiIRuAhtgEmzDja20KXm4x0eOC+K6/6sMib2YBWP9zXGisK/n6scMi+olPaClo1xKLjcVl0Gr94QqyohnNIFu4HLFocoP84exuiMw2cKCUVkQ5AZcevlEnIfVvGy1VYtdkMSyFOWIkjNiA8oz/24Ly4MfJeTqLOtBPz3XUFmHLr3+D6TL5k7C5mpo0KzuNT/F2g9vWag47JbT1H7ukxH4cz08LRbPzbMeSrH212daqPGsHptgohMDLVutL5o1IWI5upXogOibRXOraKU6IrX5gN1ngs9ENa/0Tg54P8szHn1YUA4Z4PNbkh7X8+WINdC4wJ5cDbZ0nAJNj8d7AOYU4HL0DbomKqSMF7vUHsojB4SbqqqhRpnUD5xqGUg3a2MmOnV3Gs2G+WIE5Z9J2lPV5HTDwC88Dg7qUpZWGZs+fuCIgG6d++qpP4P0eRF0hLqtGfX9unGXsbBjWtYdbDBPODuVZQSpHKSUKJswpau9eZf31eKpv1DeHogRSI6SMCMRpSPSpxfszOM66OIcHjAUsaXq8NEewuv4Gz0Kx6R13xYIjEaMk1qOoVkgUPDJTdcn45V+ZCc2itZKw4iWFEmRub9NGQI+2QNnmAQ/iJytPz+V2dGwyEMbpgHpcR/i4oIFkNWCJPvDZSfEHMch4JsAPJj8hrSuADn2MdSj/dOZeodmlLNVnjdgZUHSf6EtCjBu3gS1ujlYGSS630esF9oi5cpRnuj1GSKeLOu7YeZbCVWUkKSW4kwyJNISN8wb755trtVF//2bI+bIgCSILy+mVKQHmYs/l/qYARPlIzO+xs+cqQhrwRmacYJzYMydCAFcBe5eOLQlbNtS/MJ8qEcGs/JE5RzKBeMG3SgT8TxlkvPIy5dOSiSiXsuYWKNZaJOvaOPXU16IiEg/V2HG2HHCkfzjChgQr0Er8XpzrOFL8iWon1t7GEK/Mrg7NFdDR4kw27MgPg4Eu+mUIFTHkbSZd2BizFNoC0PtwkOtLxToC7Y3IkzkKjSsntbf5DAkaKFfe/i8XW/BIpDbAkwyPKfcK0yh4VVWUmsyFq0GnLmQy751bHHM8yiemEDF9lki4wypPK01FGRkWG1X/7G5vnjZE7xZKPC30ZN68KwQYRytID8vKkAfMFc4Ugfn6DKOlKW/9xUHyxZTsdYf60NpD7h/fmGBL++bHiPU513fauJnhfTTMnhTlzPPWBo8PGO4OfFrzJ5kW2w32Kbyu+tSYUe4tv5e0QcPlgf1MgSg3BiuUHVOmxOvmygUv5p7GmQ8EtLqcgEdn8IRJ1aee1gnMWwmBUMHfzWgHvhIgz+cbVvlUP6oQgpp41DrvjytahODvf3dph6wK3hWLLY1sVZChNqhH+Ho1tFZWgermYlM9Sw3iGYJXUL0YuKhuaaFS2hK4Tv/BvwTBiVEh+kAy3SbQCI2lyU1ZY0MXupLDO5g6ZjndiIQ3EZxFKXv1jyCwdvSpJzYnjKHmaYjDxq48T0m4QR5nsJANMyyRZydxjNUvvD+4CEHZLIuYCXYrtMpbhB2WW50KCB77+sFu/pTm9BtZvJBJ5m9kSM8Q+eqxFd5IKqdliaqEmlGSx4RkcyVdPL+qDpetUhzgvREbdZ/dv6m71mdmpcKJkh5fz9WJ+AZHrxpE6WhzP85Or85lJkfYz0fY5YEqTwA8L4+4uqtJJG0CY3DmulFpi84AIg1rC/PfLuOTd+glcxFfYLyiqwsxLexqlmABOttPm8cg0dxdZXFpyzvSMPcd7HfjKTmVDDWzQdGvvIQd2JzR47ZNO+scyuFF0J+JDRb4eoo/BQ11QeXLOfRP71mCYKAkpd94UxHILRj108mOLCjZnlhm483TzDoHnTHAr0HqrPnsH+H4cfYLIls7gy+1hyEM1JB/NGerR26nvG3YY73kCcL7gqavRR5WBaVPsTw5s5dv1LafTkiHJ19btdOZpjVFUB+ukjejufXBvR0UL4rFmM5cFOkyXD7v1O+UweUCsjDeT4G4SmtPuT/xqz5LQReog0CoC0VmhQBQUIT3pxUaFKKfmOV6K5VrLqn4N5Pd7NQtpuZii9OA35NBP7A2K63gImXfsz5Ddxb7UuxKl6hScW/HdIPYulE/pFjWKlGM1AEQL39E7L7w3CMfmhHqfJL7/wnCyyVgYj4MAUUX1btuSZa2f4+vYzXhEVrqaVfhJFq+tHR4c2WfOLnBXH5lH4c5h9pBBnvD7vc1ZtB+LKSPJsws9R3KI5qdo61k0qsjJfweBF0DkESXvRzQF32IuYbxKyvE6jhG+rKtWCMqlINghMXuagNr2ZnnY9zi2sDmiE/+5D29QpJpHHNks+uEsyV2BscVSUHpj8XwbGoHarxJAtWldsLqAB276uE2Aty5h/aS3GVAcv9/e/KrWg+LkPnDY8cnnXdSGu+2JPiKmP0y8XlXQxmEQWU01MsO3TnyVS4O1NNgtX20jv7Nkc0PFWiXhrCWXpNrc999etOh1Ar8AITfI5j46+H0y8fiydbaTIB74gIqu6uct09oL0H3aqUZuFREY6yNC7Amn/PTC45AEGSXmfXoOLuRvSKuAyFCcpsA/TRFm/vvxMZ08h/EfHiib496haLVEdV22oXAKjeBe1OGxJgxexdHI5y22+X6mmopayaE/U0iYn9T3cEjS2TNTBu8zFvTOxFJCGqhuy4ZSwNgHSCh0+okXnyO6jqviqwXxuevzxj3MhZ1Dgeqm/8xtcumjnbpxfUt2r3laLkQlFWm4xqvCvCtgyJmmlPbtMteFzVLAIqknxaex/5pcP0xxGUHo1aCd+bsqCer894qBloRT9SjzmeK6QXUUzuST1uGTmZitRs65+9bkbHH3sEX/1ARO7SLJEDqHWwmM5A2f09U8kGFxO9HKIDnlt4MI0+MCJ/Gjo6iToXBWbeOoqz/KaO2nkAvXuWu5AkCbkvg2/RVBQbTjGvqqUpeFurH3JN3G3HA9JZ0KRZlUzgRIlzq9iJbVO10uVwCcsImzDD2xfl/mheP627zX+B9tsxW4diJOJjtLKIFqe1UJLcvz7YBquzV9tIUFQ/BoD/05FyyrOR7qWPNWMBAnzOEZIUXa6vqC5HbbRnGMmss8xkFrpz503YD/ifwwtzmSxEDgsecWQ0Dhwih9ati/n7xvjahqxJyiG9jRDjovx07eTzMw57BW9XvHmcFVmyiA0elQGUDF30fzHwwKpQDOvncYniI9PDnEDo1yghguPS56nZGTyHzEE8Y9FBfeWx4UahW3xqhnlqtFGydhV5g2LfYwr7hHoNyu8OfW+zkbqEL10/bfoGEr7ytd72heYWG0H6R/uDEasP4howfE1kmSrmY7dhT9ww+u/CtdwIAWwF3xXGrOyl8yBeA/lkXSrL6QCr/LNZSUIAAh4j3cDHrzfdeeJvXtG5cLc4kVLJO2rlPdWzJ0D7c93PQHYzCoIXpIJCqxKL4krslLAGdMruApqSQLtl0NX4ryb5oNNhTHaAl6or9LbnpP643fW2W9k320osaUNYzU/JzCy7v7rXY8lAOJFJr5uAeaVYTdwg/miGSgWaQkFjTxHHlP3NUUwd8Qb99nh/jaH1ztuxYcfm7+GRaZ1Ebp3faUnfj4N5HSTaNMHs+M3mAUrRIcrOsEF0dN7VqeHtL6YNC0jzz5ZadzAd3mSxWEu7Z6DK4JMFHjIN7wYmfbjQVRrSpezY/JArYmF8yf3mW9oZi0fdutdM31uaoo3Usu9WhXZlctu2a0O8Fo72GCFb7T0sge8eWR8dEuttQ+CeyI+3MdZbJBRtwwvUThw+70iunywuPdlbCA6HA2gWu/VFPDskksKV9olIOLYB7CuEtNahSi/tr4VBTeIQEqG90sn9EyxZPTyZdWvmD80dE25r8pGzpfBT3vJ1r7k67lF0IrH+Fje5Tu6Jc6uk46yjTavxz4E/yERHvAJuH//VxarXKSlKTFdUQ0yp6ShAS09QXU0fkgdVDWGDenhzI8uUX4nAQqT+2imw0R6ANPUKc62CeOWDIXKl0x2fSd8s0ZGiirzkv/egyCuLqNvah/75b0vOXtl8atHBunwC0hvMmRlucvs0RKOx+SV2Gm58jADwe+CrOZ1R+isM0oz8j27VFvCpAqQocLDbdGshyChtoJtHAnO+RI84r78gvRC5MPtYif7m5Zfaml9jyV7DPqyBxJKzeS0QAvXYMphfA0+lhJJbezvKi3FjzPgLIrqtNCtoaT/yRFaLVTHqxYuPkgfkaU23EKIFyMwCdS9mFpkQFRPYk9AfM1qiy6Lp6RVcDYSCA4hhGZcxkQQCvGDrOlOqDi5rpAo16+KiE9DEydBH9eMJ+1dLE6pCcQRXXPM6H4+GEqgPmMmVIcCNuf3PwE4U4b2qROgJ46MYebcWAsdT8xBsSAhoGFBTdXkFfwE9JQx+gzywthO3eu9X5cR2cEDVwnouBsLF/z13tM51M7Mr70Hfbc01Ll2oGGlb6pwQW30AzZdOLkcQedV29pWQ938Q5OxpWrE3u1XnUbVsFfRcPEqBiZ+U5o4CJezozjYz1fyy0EinWHxdCT5eP03X/BN0cmv+TvhklAlL7Qwk3IECTsAYOopg3hlQ6DISJfdp1ryj2K/oHptSBuspm7gbis1eqDJ22VS+PSswvm6lRJAkq3FBlbtJGYS/NizWIKqRQ/3hvL2HeZVr36digCdpc7AC70BlFJDjEZ8PeebKXAlHsBxFj2DH8QlK+y8KOKlvndW7ioKSj260j+4IVWMv0w3fPyyaxeX7uuBrO/jr/5oTXrCq1hWPNOUBMYz7x+3WviuAOIi+frh4BMtEh/67Ps4iC36k6ACnSzQ3o0pMTAV1SE4EIuEmf2V64uAc86xupMh0DBJSYUkumI/wfhtrgnL07ytSr34YEnUx8lXDqzlUQ/TicW43Xni4sQ+hi7JsmHKGV49vndhGQNbwxQWYx3CCfebbfCDSA6ZDVyGdxg7fKCbSJvpQhj22Nwbwce4zXYzcX3KMIsEpN6vjkCOp5uS5gWBdZecmW8P2ELbW1EqQh/vwG/Ge23pRJuNEWs0WrVOT5g8PlhhFY1tHBBOWhHDG8yPIS7I9stAa609oNoQFGbcBJuxxUsoOt3wmxlJ+el2MBKJOmCEPJpqgyAk9oCxBnwmJ/9mO3gb06RFvxuAULKgnWGt+VDhTJB873tiixrVZVvJQHvRD7VvfuAn300iU8oVnV/rO+KB4dANzf+e66W9j45kZAzIAy5p1CEFO1MouzOfJv1X3YvlR398IBDLUMUHItQ54tR3KcCIBgxaTEQPPGESDokM++7OhSGl7AQuDRxpGxmCnyGloQBbuHbVNpxP6jt4mNnu+EMPaggtvnKHYkYBJjpeb81s8uA1ibqG3yeRkWQmgVyUGatDhc5I/BlSBKe5dZD/FpqLvbiLgJMjGvx2AG5qxzDayOlOPCGODTomg6AdkZ2FYmWjIg+zyWk63HQ0BsvMw7ebMs6BWYDfbOYGlCNDWAvDUlgUgTy/MITEhIeSxQ1F1EGztiocEAqbsFO2JcdrDOfmMGBsr7ohnTPJ+fr/Qbjf+j3qssSZzfkRHxCi34knUfbXJBNljzlM85dB0Xj1eGw1Nu4muSm8V5z92xcL40g3O7P3QmwunY42E88mK/ZZzDzEbE0p+EjIao1V2RrCFjjIN3whYM4RytMclGE/LCvakwauBrsG3XrAZmP3J8YyNW+l4vuUq6Cjqe+yrKlFMQSZhugy1uZ744sOA1nI0rSYpb5508DWisNeHYOflgCFIuNZCYENYLRgxLle+Esk28yGpDLmMJ894Ajchr0AXdKN+JYD0/gYffBbxZSa5pKDi4SZXnEOshTvjauFmOA1RnpENn3qng1PywrwgJdxsNmsBOwCeQVA7z2sPlvRMYvwa8cJQqCPcbEK2jHzvCZ09w5WBlNYp1Ftxri9tGbCSFWQigP50s3A3CxOeFmS5ahLxXGjNUAgTw/Sz//s5RCKCCnEyBylgytwVu/mgBeeaDdXQHFKnt/KTCAKCNJmoyrv7Nl5fIDHIQFe/te63coaFw3LXJoFIvxKGQahvcAZpRtGLbVdMZpjMp+4GzjSXUL1Yh/yXRLc8B8fIi0M5J1S+q0WkHZZ29M7zIuU9DMya4pFLSK4wjAndZPxtsUqiTbtmYCEMrW03X0iVH87r4u3rm5jK/bGDqZBSl6w4IXg5VwUoXoNcBQzl5Po1MDyWLuTy22Y0vlHagB9ljJNg8WGQGXYwON/bFAG4jCNua9jPuOA6UxeKzXQVN74ha9ZFNSK/4YtqqXWVkHZ+/L8C9rQSevc1GfVkB/BphZ6vlBk8aMoS4AupQZBM8yMcu02ufY4m2CijKN6M+8teUw1sQHQ45p/zX8+04kc1hwbVv1fGjcaNLXThSDx+M9HFN4vIBfawH4kV7Pst6riid0tq2PhCpUO1qFVnGFs8JQ5a3+mPvenfSmAcG7Fe9NpL8GKQ/Lr8kWd2NuU1Bo45q64KuTdiqg057AKTE47fi0OL+3ZgoKFrYLHUdKDEHiNBlokL2j2SW/B4/jUYWGHKexGwd1311M6UMK91NqOMbhyVBdn0GB8p5bf2PE2TJXB+8MxscX8mdtxahi0PirmTJgzoQ+1IbQYIYe6G+0a393duAyrtOExeWVxIEZXU6BhJ9rInXlm5cQH22jubttTX9jmAFFyu7PN+uZaeCQMzs7QsTku1iCFb1HLnmZ7SoKqsISP61Yb834qPTUyXUSut6IfLJJVsbLWKKI2feWyk7st+0qyFOzn/I3qZTZc2vV4ZEu6Elftf4KAFpKW1s8GzA/LufoylgH3avwiwHtsuGSDiL1IB2l00tZev0iLTEMyVADV9SI6+tZoxThUZrG9P9PWhRjAZgR0/bz2Jd8zkQ9sNhg/Nr9gUNMpzblFWNs6mA+1h9Ja0MR6itLWKyTdtwp8Rmd7X4S6uT2xUSwT5CwXqyRKhra6Rq1H8babR4KwiDGVC+ykO4+ck03T99v0sAI3CvPySsWbTzSY11vE2o75r/FM5u3GaFqzBMeQoqAGeIkUPaAbS7YEXdK9DIQ0yxz4h8FfNhv6zuwCTMmiVTpYlelG1gxcZ0oeqWVkcYX811gsTzM1XR6FsKfPmIspXKxTZSAFZprxx3F0jIfAJaVu5dF+umvIivtwOYo71EGYYmEmJRht1LrLkSptH5puOxrGIVzOFRZGPKXe6JdUv7nZ/7NjqVuPHBWzmYGdiB2hGu4k7bWhcm7aLPz944jODZpy4mFSWA9ydOdQFuRs5T6HnWDI2OFcfF7gLOCMGVUuxmNLARWop1TJ2KEY9GgQdgLbLIz3SBdsBhOlcgbv3C37GXB8R0yVjY0P3qYuWhubFbOVJfeagZye8ka187bGYKrEe8FJlQn0WdhWQIfbIxbDbPuYUoznVAkkfJ/RECcjppD5udg9ZC6IyOJlEQyyHPRqnhIPZIfFMZzg9nVIgXa0a/CpLapNf10b0j78DdFT2S9MylVFa+oJmd51zeGi8YYleE/UyWMtBDC1xJ82rO5vq7/DLP2M+huoVmDxyLavGQ2j9zpA7/0uORnO4VT9+Ill3AE0QJZapwOeOpt0h+WJTvif4R4AJWl1vf4n7QiMiYwrJrjevBdnX7HGJ4eIpGxvj5F/a/Z/POMvjSHO9Zo5VmbpY+stYthahSyqwnqfiH3LoqGG1xblGIBz32JecQ1KtJef9mWHyjSJYzVwCJc1dUjt7G5ywwQXSah+zzJxXx5uM5FRs6PgvBswkfgerCDo/KQmCRCctzcCOpqDLiJwEB66Kg0z38I1ojICDBnf7+er0gMn8NNP71k3G7IHDFEN5idGpXjO43G01GSUY7ZREa+4Rbfhu/tO9HdLIWCZkzrsgPZCnQY3gr2S7Hc1HANep43nuLfzbHht8aa+DQtYGNrsatmRXCbWdUGW5+o9vkb7ajpMvF8Ji1NdV7Bc+tP672+9OgI8uCfPqTndFlPHSSVVWjQ3NxiEBslOVpclEMAK9aKE5sWD5WP6QSvKKFbGE6Hfuf7cvq3XnuBd22LcFpPrWE5c7MijZ7UmO/fITdP9oB/vWDAeMQ7wwYvxNTlR8ssgCXF1mXGlLrhfwcqg3fPzOB3qadTABolL37i2OaDLOKtKJm0iDDEEFK4eV/6ExWZlgxU8gc32IIp9UdA/gN5mqnrDxEwWrUGUy3TqGolPryKK4l+MIHTogIl91Vd7dYS3zqOdohgk10WqdRkUq4rlGu+iJ6mPdtlAaK5AAGkolzXVlDcwOgJ7OLaOlh2b0Kn6+k1jDg981o1I7DAmkpvKD6nkVb6jSlDMlRZldeqdruP//FFKdI+l74a5OpvLMDhqv4LVw3LkdgPW1ngQI4/uXG5Q/ubd2i1bFwD70ZCEKcRb28suSFDce7fTtxgi5sCMqc8Wi29oTjatAAPgR7tQirM/Uq4CkhlfnHqzmobmivFYq+Koe89SLRlbA92aemcVs3+nSjeXxHbfIEWGj2lP+PiFzpz/j5NiDvtd8voXujQ/DoIfwtHLJbHeZ1d/ns2FsWk9jrHc3ZRE5xFXXaKA3zNTB91BMsLxxzHQcoCtUBpyXFErK4ASFyTQ6j1tp71lY/MLDK+qliN84ehEGyItAhETNcOI5ZQFLqn0ve7gshv14jXY7eIg1ClFm2fzkNMOazMjyJ1TqiraMbjI2QJEo7vEsC1XVAMlI7ZHPwnP0Nv1Bx6a0yFLsjiUIYMl/MH4sdDgPT9nUd9tgWsV1mKt+EaspObK4FxP4Qe3cdjOUL3o4/avUpTGJY5WMMeL/67WFzyeQ2y9hFXoPEpk/7oDVxPATkCm+N0lJWPlZP02hU2umjuiDNoqqBgIXhkWAJHpmX7WAXx+W6OAOYAiZ3BRAeUMClPcbzoNf6+Lk8VZoEQjqoBdXDRz4xw+ItEkFrP1U+R/YQyXeF/+kiOTwRnXiUO799FUQZEn0lAR+84Jx/7Rke6CsozP6eM4iP3eTk/Xub/qsRcOasB7q6xdAX+SYa99NAhTAaszx0gEa86J3nCW2f+7WQo9oHtUJqmeC5EA3G5dTOW7rGN9h4Rge+wDgmIU1+DjU28UuF7d1ak60dX1wk6v+lIdNWnOW6r+Rt2z2x0Oc0FdBcvcxRMqWvP2IosjnTyTDMAqcj/GJNdCJ/OYvv71yfjnITRZIk1wvxwZ0sN3Wl7RyPywCh9b+B2g8LM8Wk0UkwnpthzYwIJsYgR7WSO/IDqwwyQTDj2QtE6JlzGEQH3ZFY9a3KQ1PMYSMc6+ge/v0LHabWA/0q3Y5OATVL2y/KB3KiY5/UjxPyeqKIgLjWRyJjAaCKJSyeD0aeY2w3aINg/JC0rXt+BvtlyMiYXgRYKEq5iQtecMGE3iHmbVM3RPPFS1S2NA0V2ejtE4IA7hQXgXh3qESqMPw8DySgy2VJ5yBrYMhMTXGlriLe9LvIvFbGRzN6/0lQhw7P0i2jS7jK1lrtKGbPlrs8OOfRXHTbFozQ+9oGQ+rdvqkdUdeSiHOGz3OZXFyDGWgrh8FoFyHrSTphbyO5pGJ9f30S+vyBy6aPlbP7AxAJyJGsxX4ECtvY4jvrq+hAyu//wLO3JG/eCckdIjr9OODCuEBT8NG4mHkXdKawpd+r3CqKbdygga+3cUphPAhVXcT75A1lREfcs0cfzerhJL7Yj1C8k+O7kV4bNsLI5/qvqANOidhTjmFnl1qzpvhqW1AmopNgia0eIWs+RYZZpGifxtiqiDhVL8/FUZS2/rnrRG4ekbpmvHK/COSgq3wJcFzUKkyUMpW4RiCQ4wfF0kZ7pAcduVE3s63ow0TLdi++bT1/5EaPpCuZP5w7096fSoqI06dSux5D+pVpGARRYchKvPDkZW9xWvkulUQg7T7Hp8yMiPb7FD5hr7LgTtRl9zWGT3cYMNieG8N9pFUpnd+9PCCz85h7fgzuXjdijxBstSBdZ5gOfPJvus2sU3ucefIDfp52fPPKlhlUHSZn/gfsaSKnlaH2XHqcn26GcYdeNq8aaRFL2+QRRtlaV8C0piwsykJz2NrzNRJx7VRt754eSDuqLCYCylHQmW4sltPgjg/BXIA5MRiaxd/1QG+83XlDprvPDQ38UGffQiRD6jEynAc3rNQObN9cgpYGeZ4RW81sBEEYBBnYrknbk+XM1QrUfhA2MOeOhHrxkexduJhVxCu4cuFNjWpwhXm0=";

  // Decrypt the encrypted data using AES decryption
  const bytes = CryptoJS.AES.decrypt(encryptedData, decryptionKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // Use the decrypted data as your questData object
  const [questData, setQuestData] = useState(decryptedData);

  const onClickExpand = (index) => {
    setQuestData((prevState) => ({
      ...prevState,
      [name.toLowerCase()]: {
        ...prevState[name.toLowerCase()],
        learningPath: prevState[name.toLowerCase()].learningPath.map(
          (item, i) =>
            i === index ? { ...item, clicked: !item.clicked } : item
        ),
      },
    }));
  };

  const selectedQuest = questData[name.toLowerCase()];

  if (!selectedQuest) {
    // Handle invalid difficulty level
    return <div>Invalid level name</div>;
  }

  const onInputClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const storedQuestionStatus = localStorage.getItem(
      `${name.toLowerCase()}_question_status`
    );

    setQuestionStatus((prevQuestionStatus) => ({
      ...prevQuestionStatus,
      ...(storedQuestionStatus ? JSON.parse(storedQuestionStatus) : {}),
    }));
  }, [name]);

  useEffect(() => {
    localStorage.setItem(
      `${name.toLowerCase()}_question_status`,
      JSON.stringify(questionStatus)
    );
  }, [name, questionStatus]);

  const onAnswerSubmit = (index) => {
    scrollToTop();
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (questionStatus[index] !== undefined) {
      toast.error("You have already answered this question.");
      return;
    }

    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

    setQuestionStatus((prev) => ({
      ...prev,
      [index]: isCorrect,
    }));

    toast.success(isCorrect ? "Answer Submitted!!" : "Answer Submitted!!");

    if (isCorrect) {
      const updatedPoints = currentQuest.points + 1;
      setQuestData((prevState) => ({
        ...prevState,
        [name.toLowerCase()]: {
          ...currentQuest,
          points: updatedPoints,
          learningPath: currentQuest.learningPath.map((item, i) =>
            i === index ? { ...item, clicked: true, disabled: true } : item
          ),
        },
      }));

      setTotalPoints((prevTotalPoints) => prevTotalPoints + 1);
    } else {
      setQuestData((prevState) => ({
        ...prevState,
        [name.toLowerCase()]: {
          ...currentQuest,
          learningPath: currentQuest.learningPath.map((item, i) =>
            i === index ? { ...item, clicked: true, disabled: true } : item
          ),
        },
      }));
    }
  };

  const onDownloadClick = (e) => {
    e.stopPropagation();
    scrollToTop();
    toast.success("File Downloaded! Check your downloads folder");
  };

  const finishData = () => {
    // Check if all questions are answered
    scrollToTop();
    const answeredQuestions = Object.keys(questionStatus).map(Number);

    if (answeredQuestions.length === selectedQuest.learningPath.length) {
      // Calculate maxPoints
      const maxPoints = selectedQuest.learningPath.length;
      setMaxPoints(maxPoints);

      // Extract correct and incorrect indices
      const correctIndices = answeredQuestions.filter(
        (index) => questionStatus[index]
      );
      const incorrectIndices = answeredQuestions.filter(
        (index) => !questionStatus[index]
      );

      // Send data to Scores component
      const dataToSend = {
        correct: correctIndices,
        incorrect: incorrectIndices,
        questions: selectedQuest.learningPath.map((item) => item.title),
        explanation: selectedQuest.learningPath.map((item, index) =>
          questionStatus[index] ? "" : item.explanation
        ),
      };

      // Use history object to navigate and send data as state
      navigate("/scores", { state: { data: dataToSend } });
    } else {
      toast.error("Please answer all questions before finishing.");
    }
  };

  return (
    <div class="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full">
      <div className="h-full w-full container flex flex-col justify-center items-center">
        <ToastContainer />
        <div className="w-full h-full flex flex-col justify-between ">
          <div className="border border-[#fafafa] p-5 mt-5 mb-5">
            <div className="flex-col">
              <img
                src={selectedQuest.img}
                alt="profile-photo"
                className="w-full h-36 sm:h-64 h object-cover mb-2 rounded-sm"
              />
              <h1 className="text-2xl font-bold">{selectedQuest.title}</h1>
            </div>
            <div className="mb-2">
              <p className="">{selectedQuest.description}</p>
              <p className=" font-semibold">
                Tip:- Click the question to see options; then select and submit
                your answer (1, 2, or 3). Any other response will be marked
                incorrect.
              </p>
            </div>

            <div className="border border-[#fafafa] p-3 space-y-3">
              <div className="flex flex-col gap-4">
                <h1>{questData[name].downloadTag}</h1>
                <div className="mb-2 sm:mb-0">
                  {questData[name].downloadable ? (
                    <a
                      onClick={onDownloadClick}
                      href={questData[name].fileDownload}
                      className="px-5 py-4  bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >
                      {questData[name].fileName}
                    </a>
                  ) : (
                    <Link
                      to={questData[name].fileDownload}
                      onClick={onDownloadClick}
                      className="px-5 py-4 bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >
                      {questData[name].fileName}
                    </Link>
                  )}
                </div>
              </div>
              {selectedQuest.learningPath.map((item, index) => (
                <div className="flex flex-col gap-3 w-full" key={item.level}>
                  {questionStatus[index] === undefined ? (
                    item.disabled ? (
                      <div className="bg-gray-800  items-center p-5 mt-2 rounded-sm flex-col">
                        <p className="text-white">{`${item.level} - This item has already been answered`}</p>
                        {/* You can display a message or any other content for disabled items */}
                      </div>
                    ) : (
                      <div
                        onClick={() => onClickExpand(index)}
                        className="bg-gray-800 items-center p-5 mt-1 sm:mt-3 rounded-sm flex-col"
                      >
                        <div className="flex justify-between">
                          <p className="text-white">{`${item.level} - ${item.title}`}</p>
                          {item.clicked ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width={"1.2rem"}
                              height={"1.2rem"}
                            >
                              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width={"1.2rem"}
                              height={"1.2rem"}
                            >
                              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                            </svg>
                          )}
                        </div>

                        {item.clicked && (
                          <>
                            <p>{item.options}</p>
                            <div className="flex gap-3 items-center flex-col sm:flex-row align-middle mt-2">
                              <input
                                onChange={(e) => setUserAnswer(e.target.value)}
                                onClick={onInputClick}
                                placeholder="Type your answer"
                                className="h-5 p-5 pb-5 pl-2 w-full sm:w-auto  hover:transition-all hover:duration-75 hover:ease-in-out text-black rounded-sm"
                              />

                              <button
                                onClick={() => onAnswerSubmit(index)}
                                className="px-3 py-2 w-full sm:w-auto bg-black rounded text-white"
                              >
                                Submit
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="bg-gray-800  items-center p-5 mt-2 rounded-sm flex-col">
                      <p className="text-white">{`${item.level} - This item has already been answered`}</p>
                      {/* You can display a message or any other content for disabled items */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={finishData}
            className="bg-[#fafafa] text-black p-3 mb-16 sm:mb-12  hover:text-white hover:bg-black hover:transition-all hover:delay-75 hover:ease-in-out hover:border-white hover:border"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
