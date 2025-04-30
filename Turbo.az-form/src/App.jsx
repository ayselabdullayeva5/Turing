import { useForm, useWatch } from "react-hook-form";
import Input from "./Components/Input";
import Select from "./Components/Select";
import { ban, brands, cities, color, condition, countries, equipment, fuel, owner, place, powerOptions, speed, year } from "./Components/Options";
import Textarea from "./Components/Textarea";
import Checkbox from "./Components/Checkbox";
import Brand from "./Components/Brand";
import Road from "./Components/Road";
import Model from "./Components/Model";
import Number from "./Components/Number";
export default function App() {

  const { formState: { errors }, control, handleSubmit, watch } = useForm();
  const selectedBrand = useWatch({ control, name: "brand" });

  const onSubmit = (data) => {
    console.log(data);
    alert("Elan uğurla göndərildi!");
  }

  const carType = watch("carType");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ELAN YERLƏŞDİRMƏK</h1>
      <ul>
        <li>Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna bilər.</li>
        <li>Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng) ödənişlidir.</li>
        <li>Elanınızı saytın ön sıralarında görmək üçün "İrəli çək" xidmətindən istifadə edin.</li>
      </ul>
      <div className="announce">
        <Brand control={control} brands={brands}
          required="göstərilməlidir"
          error={errors.brand?.message} />
        <Select options={fuel}
          name="fuel"
          star="*"
          label="Yanacaq növü "
          control={control}
          required="mövcud olmalıdır"
          error={errors.fuel?.message}
        />
      </div>
      <div className="announce">
        <Model control={control}
          required="mövcud olmalıdır"
          error={errors.model?.message}
          selectedBrand={selectedBrand} />
        <Select options={["Arxa", "Ön", "Tam"]}
          name="transmitter"
          star="*"
          required="mövcud olmalıdır"
          control={control}
          label="Ötürücü "
          error={errors.transmitter?.message}
        />
      </div>
      <div className="announce">
        <Select options={ban}
          star="*"
          name="ban"
          required="mövcud olmalıdır"
          control={control}
          label="Ban növü "
          error={errors.ban?.message}
        />
        <Select options={speed}
          star="*"
          name="speed"
          required="mövcud olmalıdır"
          control={control}
          label="Sürətlər qutusu "
          error={errors.speed?.message}
        />
      </div>
      <div className="announce">
        <Road options={["km", "ml"]}
          title="Yürüş"
          control={control}
          required="mövcud olmalıdır"
          error={errors} />
        <Select options={year}
          star="*"
          name="year"
          required="göstərilməlidir"
          control={control}
          label="İl"
          error={errors.year?.message}
        />
      </div>
      <div className="announce">
        <Select options={color}
          star="*"
          name="color"
          required="mövcud olmalıdır"
          control={control}
          label="Rəng"
          error={errors.color?.message}
        />
        <Select options={powerOptions}
          star="*"
          name="size"
          required="göstərilməlidir"
          control={control}
          label="Mühərrikin həcmi, sm3 "
          error={errors.size?.message}
        />
      </div>
      <div className="announce">
        <Road options={["AZN", "USD", "EUR"]}
          title="Qiymət"
          control={control} 
          required="göstərilməlidir"
          error={errors}/>
        <Number star="*"
          required="göstərilməlidir"
          control={control}
          inputname="Mühərrikin gücü, a.g. "
          error={errors.number?.message}/>        
      </div>
      <div className="announce">
        <Select options={owner}
          control={control}
          name="owner"
          label="Neçənci sahibisiniz?"
        />
        <Select options={countries}
          name="sell"
          control={control}
          label="Hansı bazar üçün yığılıb"
        />
      </div>
      <Checkbox className="condition"
        title="Vəziyyəti"
        options={condition}
        name="condition"
        control={control} />
      <Checkbox className="place"
        title="Yerlərin sayı"
        options={place}
        name="place"
        control={control} />
      <Checkbox className="credit"
        options={["Kreditlə","Barter mümkündür"]}
        name="credit"
        control={control}/>
      <Checkbox className="equipment"
        title="Avtomobilin təchizatı"
        options={equipment}
        name="equipment"
        control={control} />
      <Input type="text"
        name="code"
        inputname="VIN-kod"
        control={control} />
      <Textarea control={control}
        name="additionalInfo" />
      <Input type="text"
        star="*"
        name="name"
        inputname="Adınız"
        control={control}
        required="göstərilməlidir"
        error={errors.name?.message} />
      <Select options={cities}
        star="*"
        name="city"
        control={control}
        label="Şəhər "
      />
      <Input type="email"
        star="*"
        name="gmail"
        inputname="E-mail"
        control={control}
        error={errors.gmail?.message}
        hint="saytda göstərilmir"
        required="göstərilməlidir" />
      <Input type="tel"
        star="*"
        name="tel"
        inputname="Telefon nömrəsi "
        control={control}
        required="göstərilməlidir"
        placeholder="(000) 000-00-00"
        error={errors.tel?.message} />
      <input type="submit" value={"Davam et"} className="button" />
    </form>
  )
}