
   $('#Marketplace_section').hide();
// Hide Products show marketplace section

    function Hide_Products_Show_Marketplace(){
          $('#Marketplace_section').show();
          $('#Products_section').hide();
    }
// Show Products hide marketplace section
     function Hide_Marketplace_Show_Products(){
          $('#Marketplace_section').hide();
          $('#Products_section').show();
    }

function ascending(){
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("next[1]", "asc");
    window.location.search = searchParams.toString();
                                    }
}
function descending(){
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("next[1]", "dsc");
    window.location.search = searchParams.toString();
                                    }
}
function relevance(){
  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("next[1]", "rel");
    window.location.search = searchParams.toString();
                                    }
}
// Newest Arrivals
function NewestArrival(){
    if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("next[1]", "Nwst");
    window.location.search = searchParams.toString();
    }
}

var searchParams = new URLSearchParams(window.location.search);

// Searchinput
var searchinput = document.getElementById('text-inside-comp');
if(searchParams.get('q')!==null){
    searchinput.value=searchParams.get('q');}

// To display Items of div

function DisplayFitItems(){
$('#hidden-items-fit').toggle(100);
}

Fit_div = document.getElementById('hidden-items-fit');
if(searchParams.get("next[6]")!==null){
searchParams_fit = searchParams.get("next[6]").split(",");
for(var i=0;i<Fit_div.getElementsByTagName('input').length;i++){
    if(searchParams_fit.includes(Fit_div.getElementsByTagName('input')[i].value)){
        Fit_div.getElementsByTagName('input')[i].checked=true;
    } } }
function DisplayPatternItems(){
$('#hidden-items-pattern').toggle(100);
}
Pattern_div = document.getElementById('hidden-items-pattern');
if(searchParams.get("next[7]")!==null){
searchParams_pattern = searchParams.get("next[7]").split(",");
for(var i=0;i<Pattern_div.getElementsByTagName('input').length;i++){
    if(searchParams_pattern.includes(Pattern_div.getElementsByTagName('input')[i].value)){
        Pattern_div.getElementsByTagName('input')[i].checked=true;
    } } }

function DisplayNeck_typeItems(){
$('#hidden-items-neck_type').toggle(100);
}
Neck_type_div = document.getElementById('hidden-items-neck_type');
if(searchParams.get("next[8]")!==null){
searchParams_Neck_type = searchParams.get("next[8]").split(",");
for(var i=0;i<Neck_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Neck_type.includes(Neck_type_div.getElementsByTagName('input')[i].value)){
        Neck_type_div.getElementsByTagName('input')[i].checked=true;
    } } }

function DisplaySleeve_typeItems(){
$('#hidden-items-sleeve_type').toggle(100);
}
Sleeve_type_div = document.getElementById('hidden-items-sleeve_type');
if(searchParams.get("next[9]")!==null){
searchParams_Sleeve_type = searchParams.get("next[9]").split(",");
for(var i=0;i<Sleeve_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Sleeve_type.includes(Sleeve_type_div.getElementsByTagName('input')[i].value)){
        Sleeve_type_div.getElementsByTagName('input')[i].checked=true;
    } } }

function DisplayThemeItems(){
$('#hidden-items-theme').toggle(100);
}
Theme_div = document.getElementById('hidden-items-theme');
if(searchParams.get("next[10]")!==null){
searchParams_theme = searchParams.get("next[10]").split(",");
for(var i=0;i<Theme_div.getElementsByTagName('input').length;i++){
    if(searchParams_theme.includes(Theme_div.getElementsByTagName('input')[i].value)){
        Theme_div.getElementsByTagName('input')[i].checked=true;} } }

function DisplayFabricItems(){
$('#hidden-items-fabric').toggle(100);
}
Fabric_div = document.getElementById('hidden-items-fabric');
if(searchParams.get("next[11]")!==null){
searchParams_fabric = searchParams.get("next[11]").split(",");
for(var i=0;i<Fabric_div.getElementsByTagName('input').length;i++){
    if(searchParams_fabric.includes(Fabric_div.getElementsByTagName('input')[i].value)){
        Fabric_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Occasion items
function DisplayOccasionItems(){
$('#hidden-items-occasion').toggle(100);
}
Occasion_div = document.getElementById('hidden-items-occasion');
if(searchParams.get("next[12]")!==null){
searchParams_occasion = searchParams.get("next[12]").split(",");
for(var i=0;i<Occasion_div.getElementsByTagName('input').length;i++){
    if(searchParams_occasion.includes(Occasion_div.getElementsByTagName('input')[i].value)){
        Occasion_div.getElementsByTagName('input')[i].checked=true;} } }


// To display collar items
function DisplayCollarItems(){
$('#hidden-items-collar').toggle(100);
}
Collar_div = document.getElementById('hidden-items-collar');
if(searchParams.get("next[13]")!==null){
searchParams_collar = searchParams.get("next[13]").split(",");
for(var i=0;i<Collar_div.getElementsByTagName('input').length;i++){
    if(searchParams_collar.includes(Collar_div.getElementsByTagName('input')[i].value)){
        Collar_div.getElementsByTagName('input')[i].checked=true;} } }

// To display type items
function DisplaytypeItems(){
$('#hidden-items-type').toggle(100);
}
type_div = document.getElementById('hidden-items-type');
if(searchParams.get("next[14]")!==null){
searchParams_type = searchParams.get("next[14]").split(",");
for(var i=0;i<type_div.getElementsByTagName('input').length;i++){
    if(searchParams_type.includes(type_div.getElementsByTagName('input')[i].value)){
        type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display distress items
function DisplayDistressItems(){
$('#hidden-items-distress').toggle(100);
}
Distress_div = document.getElementById('hidden-items-distress');
if(searchParams.get("next[15]")!==null){
searchParams_Distress = searchParams.get("next[15]").split(",");
for(var i=0;i<Distress_div.getElementsByTagName('input').length;i++){
    if(searchParams_Distress.includes(Distress_div.getElementsByTagName('input')[i].value)){
        Distress_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Fade items
function DisplayFadeItems(){
$('#hidden-items-fade').toggle(100);
}
Fade_div = document.getElementById('hidden-items-fade');
if(searchParams.get("next[16]")!==null){
searchParams_Fade = searchParams.get("next[16]").split(",");
for(var i=0;i<Fade_div.getElementsByTagName('input').length;i++){
    if(searchParams_Fade.includes(Fade_div.getElementsByTagName('input')[i].value)){
        Fade_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Waist_rise items
function DisplayWaist_riseItems(){
$('#hidden-items-waist_rise').toggle(100);
}
Waist_rise_div = document.getElementById('hidden-items-waist_rise');
if(searchParams.get("next[17]")!==null){
searchParams_Waist_rise = searchParams.get("next[17]").split(",");
for(var i=0;i<Waist_rise_div.getElementsByTagName('input').length;i++){
    if(searchParams_Waist_rise.includes(Waist_rise_div.getElementsByTagName('input')[i].value)){
        Waist_rise_div.getElementsByTagName('input')[i].checked=true;} } }

// To display heel_height items
function Displayheel_heightItems(){
$('#hidden-items-heel_height').toggle(100);
}
heel_height_div = document.getElementById('hidden-items-heel_height');
if(searchParams.get("next[18]")!==null){
searchParams_heel_height = searchParams.get("next[18]").split(",");
for(var i=0;i<heel_height_div.getElementsByTagName('input').length;i++){
    if(searchParams_heel_height.includes(heel_height_div.getElementsByTagName('input')[i].value)){
        heel_height_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Length items
function DisplayLengthItems(){
$('#hidden-items-length').toggle(100);
}
Length_div = document.getElementById('hidden-items-length');
if(searchParams.get("next[19]")!==null){
searchParams_Length = searchParams.get("next[19]").split(",");
for(var i=0;i<Length_div.getElementsByTagName('input').length;i++){
    if(searchParams_Length.includes(Length_div.getElementsByTagName('input')[i].value)){
        Length_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Closure items
function DisplayClosureItems(){
$('#hidden-items-closure').toggle(100);
}
Closure_div = document.getElementById('hidden-items-closure');
if(searchParams.get("next[20]")!==null){
searchParams_Closure = searchParams.get("next[20]").split(",");
for(var i=0;i<Closure_div.getElementsByTagName('input').length;i++){
    if(searchParams_Closure.includes(Closure_div.getElementsByTagName('input')[i].value)){
        Closure_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Sleeve_style items
function DisplaySleeve_styleItems(){
$('#hidden-items-Sleeve_style').toggle(100);
}
Sleeve_style_div = document.getElementById('hidden-items-Sleeve_style');
if(searchParams.get("next[21]")!==null){
searchParams_Sleeve_style = searchParams.get("next[21]").split(",");
for(var i=0;i<Sleeve_style_div.getElementsByTagName('input').length;i++){
    if(searchParams_Sleeve_style.includes(Sleeve_style_div.getElementsByTagName('input')[i].value)){
        Sleeve_style_div.getElementsByTagName('input')[i].checked=true;} } }

// To display usage items
function DisplayusageItems(){
$('#hidden-items-usage').toggle(100);
}
usage_div = document.getElementById('hidden-items-usage');
if(searchParams.get("next[22]")!==null){
searchParams_usage = searchParams.get("next[22]").split(",");
for(var i=0;i<usage_div.getElementsByTagName('input').length;i++){
    if(searchParams_usage.includes(usage_div.getElementsByTagName('input')[i].value)){
        usage_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Hooded items
function DisplayHoodedItems(){
$('#hidden-items-Hooded').toggle(100);
}
Hooded_div = document.getElementById('hidden-items-Hooded');
if(searchParams.get("next[23]")!==null){
searchParams_Hooded = searchParams.get("next[23]").split(",");
for(var i=0;i<Hooded_div.getElementsByTagName('input').length;i++){
    if(searchParams_Hooded.includes(Hooded_div.getElementsByTagName('input')[i].value)){
        Hooded_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Ornamentation items
function DisplayOrnamentationItems(){
$('#hidden-items-Ornamentation').toggle(100);
}
Ornamentation_div = document.getElementById('hidden-items-Ornamentation');
if(searchParams.get("next[24]")!==null){
searchParams_Ornamentation = searchParams.get("next[24]").split(",");
for(var i=0;i<Ornamentation_div.getElementsByTagName('input').length;i++){
    if(searchParams_Ornamentation.includes(Ornamentation_div.getElementsByTagName('input')[i].value)){
        Ornamentation_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Styling items
function DisplayStylingItems(){
$('#hidden-items-Styling').toggle(100);
}
Styling_div = document.getElementById('hidden-items-Styling');
if(searchParams.get("next[25]")!==null){
searchParams_Styling = searchParams.get("next[25]").split(",");
for(var i=0;i<Styling_div.getElementsByTagName('input').length;i++){
    if(searchParams_Styling.includes(Styling_div.getElementsByTagName('input')[i].value)){
        Styling_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Suitable_for items
function DisplaySuitable_forItems(){
$('#hidden-items-Suitable_for').toggle(100);
}
Suitable_for_div = document.getElementById('hidden-items-Suitable_for');
if(searchParams.get("next[26]")!==null){
searchParams_Suitable_for = searchParams.get("next[26]").split(",");
for(var i=0;i<Suitable_for_div.getElementsByTagName('input').length;i++){
    if(searchParams_Suitable_for.includes(Suitable_for_div.getElementsByTagName('input')[i].value)){
        Suitable_for_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Applied_for items
function DisplayApplied_forItems(){
$('#hidden-items-Applied_for').toggle(100);
}
Applied_for_div = document.getElementById('hidden-items-Applied_for');
if(searchParams.get("next[27]")!==null){
searchParams_Applied_for = searchParams.get("next[27]").split(",");
for(var i=0;i<Applied_for_div.getElementsByTagName('input').length;i++){
    if(searchParams_Applied_for.includes(Applied_for_div.getElementsByTagName('input')[i].value)){
        Applied_for_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Hair_type items
function DisplayHair_typeItems(){
$('#hidden-items-Hair_type').toggle(100);
}
Hair_type_div = document.getElementById('hidden-items-Hair_type');
if(searchParams.get("next[28]")!==null){
searchParams_Hair_type = searchParams.get("next[28]").split(",");
for(var i=0;i<Hair_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Hair_type.includes(Hair_type_div.getElementsByTagName('input')[i].value)){
        Hair_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Pack_of items
function DisplayPack_ofItems(){
$('#hidden-items-Pack_of').toggle(100);
}
Pack_of_div = document.getElementById('hidden-items-Pack_of');
if(searchParams.get("next[29]")!==null){
searchParams_Pack_of = searchParams.get("next[29]").split(",");
for(var i=0;i<Pack_of_div.getElementsByTagName('input').length;i++){
    if(searchParams_Pack_of.includes(Pack_of_div.getElementsByTagName('input')[i].value)){
        Pack_of_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Washable items
function DisplayWashableItems(){
$('#hidden-items-Washable').toggle(100);
}
Washable_div = document.getElementById('hidden-items-Washable');
if(searchParams.get("next[30]")!==null){
searchParams_Washable = searchParams.get("next[30]").split(",");
for(var i=0;i<Washable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Washable.includes(Washable_div.getElementsByTagName('input')[i].value)){
        Washable_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Water_resistance items
function DisplayWater_resistanceItems(){
$('#hidden-items-Water_resistance').toggle(100);
}
Water_resistance_div = document.getElementById('hidden-items-Water_resistance');
if(searchParams.get("next[31]")!==null){
searchParams_Water_resistance = searchParams.get("next[31]").split(",");
for(var i=0;i<Water_resistance_div.getElementsByTagName('input').length;i++){
    if(searchParams_Water_resistance.includes(Water_resistance_div.getElementsByTagName('input')[i].value)){
       Water_resistance_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rise items
function DisplayRiseItems(){
$('#hidden-items-Rise').toggle(100);
}
Rise_div = document.getElementById('hidden-items-Rise');
if(searchParams.get("next[32]")!==null){
searchParams_Rise = searchParams.get("next[32]").split(",");
for(var i=0;i<Rise_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rise.includes(Rise_div.getElementsByTagName('input')[i].value)){
        Rise_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Straps items
function DisplayStrapsItems(){
$('#hidden-items-Straps').toggle(100);
}
Straps_div = document.getElementById('hidden-items-Straps');
if(searchParams.get("next[33]")!==null){
searchParams_Straps = searchParams.get("next[33]").split(",");
for(var i=0;i<Straps_div.getElementsByTagName('input').length;i++){
    if(searchParams_Straps.includes(Straps_div.getElementsByTagName('input')[i].value)){
        Straps_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Wire_support items
function DisplayWire_supportItems(){
$('#hidden-items-Wire_support').toggle(100);
}
Wire_support_div = document.getElementById('hidden-items-Wire_support');
if(searchParams.get("next[34]")!==null){
searchParams_Wire_support = searchParams.get("next[34]").split(",");
for(var i=0;i<Wire_support_div.getElementsByTagName('input').length;i++){
    if(searchParams_Wire_support.includes(Wire_support_div.getElementsByTagName('input')[i].value)){
        Wire_support_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Padding items
function DisplayPaddingItems(){
$('#hidden-items-Padding').toggle(100);
}
Padding_div = document.getElementById('hidden-items-Padding');
if(searchParams.get("next[35]")!==null){
searchParams_Padding = searchParams.get("next[35]").split(",");
for(var i=0;i<Padding_div.getElementsByTagName('input').length;i++){
    if(searchParams_Padding.includes(Padding_div.getElementsByTagName('input')[i].value)){
        Padding_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Seam items
function DisplaySeamItems(){
$('#hidden-items-Seam').toggle(100);
}
Seam_div = document.getElementById('hidden-items-Seam');
if(searchParams.get("next[36]")!==null){
searchParams_Seam = searchParams.get("next[36]").split(",");
for(var i=0;i<Seam_div.getElementsByTagName('input').length;i++){
    if(searchParams_Seam.includes(Seam_div.getElementsByTagName('input')[i].value)){
        Seam_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Coverage items
function DisplayCoverageItems(){
$('#hidden-items-Coverage').toggle(100);
}
Coverage_div = document.getElementById('hidden-items-Coverage');
if(searchParams.get("next[37]")!==null){
searchParams_Coverage = searchParams.get("next[37]").split(",");
for(var i=0;i<Coverage_div.getElementsByTagName('input').length;i++){
    if(searchParams_Coverage.includes(Coverage_div.getElementsByTagName('input')[i].value)){
        Coverage_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Back_style items
function DisplayBack_styleItems(){
$('#hidden-items-Back_style').toggle(100);
}
Back_style_div = document.getElementById('hidden-items-Back_style');
if(searchParams.get("next[38]")!==null){
searchParams_Back_style = searchParams.get("next[38]").split(",");
for(var i=0;i<Back_style_div.getElementsByTagName('input').length;i++){
    if(searchParams_Back_style.includes(Back_style_div.getElementsByTagName('input')[i].value)){
        Back_style_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Dial_color items
function DisplayDial_colorItems(){
$('#hidden-items-Dial_color').toggle(100);
}
Dial_color_div = document.getElementById('hidden-items-Dial_color');
if(searchParams.get("next[39]")!==null){
searchParams_Dial_color = searchParams.get("next[39]").split(",");
for(var i=0;i<Dial_color_div.getElementsByTagName('input').length;i++){
    if(searchParams_Dial_color.includes(Dial_color_div.getElementsByTagName('input')[i].value)){
        Dial_color_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Features items
function DisplayFeaturesItems(){
$('#hidden-items-Features').toggle(100);
}
Features_div = document.getElementById('hidden-items-Features');
if(searchParams.get("next[40]")!==null){
searchParams_Features = searchParams.get("next[40]").split(",");
for(var i=0;i<Features_div.getElementsByTagName('input').length;i++){
    if(searchParams_Features.includes(Features_div.getElementsByTagName('input')[i].value)){
        Features_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Dial_shape items
function DisplayDial_shapeItems(){
$('#hidden-items-Dial_shape').toggle(100);
}
Dial_shape_div = document.getElementById('hidden-items-Dial_shape');
if(searchParams.get("next[41]")!==null){
searchParams_Dial_shape = searchParams.get("next[41]").split(",");
for(var i=0;i<Dial_shape_div.getElementsByTagName('input').length;i++){
    if(searchParams_Dial_shape.includes(Dial_shape_div.getElementsByTagName('input')[i].value)){
        Dial_shape_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Strap_material items
function DisplayStrap_materialItems(){
$('#hidden-items-Strap_material').toggle(100);
}
Strap_material_div = document.getElementById('hidden-items-Strap_material');
if(searchParams.get("next[42]")!==null){
searchParams_Strap_material = searchParams.get("next[42]").split(",");
for(var i=0;i<Strap_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Strap_material.includes(Strap_material_div.getElementsByTagName('input')[i].value)){
        Strap_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_compartments items
function DisplayNumber_of_compartmentsItems(){
$('#hidden-items-Number_of_compartments').toggle(100);
}
Number_of_compartments_div = document.getElementById('hidden-items-Number_of_compartments');
if(searchParams.get("next[43]")!==null){
searchParams_Number_of_compartments = searchParams.get("next[43]").split(",");
for(var i=0;i<Number_of_compartments_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_compartments.includes(Number_of_compartments_div.getElementsByTagName('input')[i].value)){
        Number_of_compartments_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Material items
function DisplayMaterialItems(){
$('#hidden-items-Material').toggle(100);
}
Material_div = document.getElementById('hidden-items-Material');
if(searchParams.get("next[44]")!==null){
searchParams_Material = searchParams.get("next[44]").split(",");
for(var i=0;i<Material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Material.includes(Material_div.getElementsByTagName('input')[i].value)){
        Material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Bag_size items
function DisplayBag_sizeItems(){
$('#hidden-items-Bag_size').toggle(100);
}
Bag_size_div = document.getElementById('hidden-items-Bag_size');
if(searchParams.get("next[45]")!==null){
searchParams_Bag_size = searchParams.get("next[45]").split(",");
for(var i=0;i<Bag_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bag_size.includes(Bag_size_div.getElementsByTagName('input')[i].value)){
        Bag_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display wheels items
function DisplaywheelsItems(){
$('#hidden-items-wheels').toggle(100);
}
wheels_div = document.getElementById('hidden-items-wheels');
if(searchParams.get("next[46]")!==null){
searchParams_wheels = searchParams.get("next[46]").split(",");
for(var i=0;i<wheels_div.getElementsByTagName('input').length;i++){
    if(searchParams_wheels.includes(wheels_div.getElementsByTagName('input')[i].value)){
        wheels_div.getElementsByTagName('input')[i].checked=true;} } }

// To display body_type items
function Displaybody_typeItems(){
$('#hidden-items-body_type').toggle(100);
}
body_type_div = document.getElementById('hidden-items-body_type');
if(searchParams.get("next[47]")!==null){
searchParams_body_type = searchParams.get("next[47]").split(",");
for(var i=0;i<body_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_body_type.includes(body_type_div.getElementsByTagName('input')[i].value)){
        body_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display capacity items
function DisplaycapacityItems(){
$('#hidden-items-capacity').toggle(100);
}
capacity_div = document.getElementById('hidden-items-capacity');
if(searchParams.get("next[48]")!==null){
searchParams_capacity = searchParams.get("next[48]").split(",");
for(var i=0;i<capacity_div.getElementsByTagName('input').length;i++){
    if(searchParams_capacity.includes(capacity_div.getElementsByTagName('input')[i].value)){
        capacity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display card_slot items
function Displaycard_slotItems(){
$('#hidden-items-card_slot').toggle(100);
}
card_slot_div = document.getElementById('hidden-items-card_slot');
if(searchParams.get("next[49]")!==null){
searchParams_card_slot = searchParams.get("next[49]").split(",");
for(var i=0;i<card_slot_div.getElementsByTagName('input').length;i++){
    if(searchParams_card_slot.includes(card_slot_div.getElementsByTagName('input')[i].value)){
        card_slot_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Strap_color items
function DisplayStrap_colorItems(){
$('#hidden-items-Strap_color').toggle(100);
}
Strap_color_div = document.getElementById('hidden-items-Strap_color');
if(searchParams.get("next[50]")!==null){
searchParams_Strap_color = searchParams.get("next[50]").split(",");
for(var i=0;i<Strap_color_div.getElementsByTagName('input').length;i++){
    if(searchParams_Strap_color.includes(Strap_color_div.getElementsByTagName('input')[i].value)){
        Strap_color_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Compatible_OS items
function DisplayCompatible_OSItems(){
$('#hidden-items-Compatible_OS').toggle(100);
}
Compatible_OS_div = document.getElementById('hidden-items-Compatible_OS');
if(searchParams.get("next[51]")!==null){
searchParams_Compatible_OS = searchParams.get("next[51]").split(",");
for(var i=0;i<Compatible_OS_div.getElementsByTagName('input').length;i++){
    if(searchParams_Compatible_OS.includes(Compatible_OS_div.getElementsByTagName('input')[i].value)){
        Compatible_OS_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Display_type items
function DisplayDisplay_typeItems(){
$('#hidden-items-Display_type').toggle(100);
}
Display_type_div = document.getElementById('hidden-items-Display_type');
if(searchParams.get("next[52]")!==null){
searchParams_Display_type = searchParams.get("next[52]").split(",");
for(var i=0;i<Display_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Display_type.includes(Display_type_div.getElementsByTagName('input')[i].value)){
        Display_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Gemstones items
function DisplayGemstonesItems(){
$('#hidden-items-Gemstones').toggle(100);
}
Gemstones_div = document.getElementById('hidden-items-Gemstones');
if(searchParams.get("next[53]")!==null){
searchParams_Gemstones = searchParams.get("next[53]").split(",");
for(var i=0;i<Gemstones_div.getElementsByTagName('input').length;i++){
    if(searchParams_Gemstones.includes(Gemstones_div.getElementsByTagName('input')[i].value)){
        Gemstones_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Gender items
function DisplayGenderItems(){
$('#hidden-items-Gender').toggle(100);
}
Gender_div = document.getElementById('hidden-items-Gender');
if(searchParams.get("next[54]")!==null){
searchParams_Gender = searchParams.get("next[54]").split(",");
for(var i=0;i<Gender_div.getElementsByTagName('input').length;i++){
    if(searchParams_Gender.includes(Gender_div.getElementsByTagName('input')[i].value)){
        Gender_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Blade_material items
function DisplayBlade_materialItems(){
$('#hidden-items-Blade_material').toggle(100);
}
Blade_material_div = document.getElementById('hidden-items-Blade_material');
if(searchParams.get("next[55]")!==null){
searchParams_Blade_material = searchParams.get("next[55]").split(",");
for(var i=0;i<Blade_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Blade_material.includes(Blade_material_div.getElementsByTagName('input')[i].value)){
        Blade_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Battery_run_time items
function DisplayBattery_run_timeItems(){
$('#hidden-items-Battery_run_time').toggle(100);
}
Battery_run_time_div = document.getElementById('hidden-items-Battery_run_time');
if(searchParams.get("next[56]")!==null){
searchParams_Battery_run_time = searchParams.get("next[56]").split(",");
for(var i=0;i<Battery_run_time_div.getElementsByTagName('input').length;i++){
    if(searchParams_Battery_run_time.includes(Battery_run_time_div.getElementsByTagName('input')[i].value)){
        Battery_run_time_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Body_material items
function DisplayBody_materialItems(){
$('#hidden-items-Body_material').toggle(100);
}
Body_material_div = document.getElementById('hidden-items-Body_material');
if(searchParams.get("next[57]")!==null){
searchParams_Body_material = searchParams.get("next[57]").split(",");
for(var i=0;i<Body_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Body_material.includes(Body_material_div.getElementsByTagName('input')[i].value)){
        Body_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Plate_coating items
function DisplayPlate_coatingItems(){
$('#hidden-items-Plate_coating').toggle(100);
}
Plate_coating_div = document.getElementById('hidden-items-Plate_coating');
if(searchParams.get("next[58]")!==null){
searchParams_Plate_coating = searchParams.get("next[58]").split(",");
for(var i=0;i<Plate_coating_div.getElementsByTagName('input').length;i++){
    if(searchParams_Plate_coating.includes(Plate_coating_div.getElementsByTagName('input')[i].value)){
        Plate_coating_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Wattage items
function DisplayWattageItems(){
$('#hidden-items-Wattage').toggle(100);
}
Wattage_div = document.getElementById('hidden-items-Wattage');
if(searchParams.get("next[59]")!==null){
searchParams_Wattage = searchParams.get("next[59]").split(",");
for(var i=0;i<Wattage_div.getElementsByTagName('input').length;i++){
    if(searchParams_Wattage.includes(Wattage_div.getElementsByTagName('input')[i].value)){
        Wattage_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Collection items
function DisplayCollectionItems(){
$('#hidden-items-Collection').toggle(100);
}
Collection_div = document.getElementById('hidden-items-Collection');
if(searchParams.get("next[60]")!==null){
searchParams_Collection = searchParams.get("next[60]").split(",");
for(var i=0;i<Collection_div.getElementsByTagName('input').length;i++){
    if(searchParams_Collection.includes(Collection_div.getElementsByTagName('input')[i].value)){
        Collection_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Ring_size items
function DisplayRing_sizeItems(){
$('#hidden-items-Ring_size').toggle(100);
}
Ring_size_div = document.getElementById('hidden-items-Ring_size');
if(searchParams.get("next[61]")!==null){
searchParams_Ring_size = searchParams.get("next[61]").split(",");
for(var i=0;i<Ring_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Ring_size.includes(Ring_size_div.getElementsByTagName('input')[i].value)){
        Ring_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Dress_length items
function DisplayDress_lengthItems(){
$('#hidden-items-Dress_length').toggle(100);
}
Dress_length_div = document.getElementById('hidden-items-Dress_length');
if(searchParams.get("next[62]")!==null){
searchParams_Dress_length = searchParams.get("next[62]").split(",");
for(var i=0;i<Dress_length_div.getElementsByTagName('input').length;i++){
    if(searchParams_Dress_length.includes(Dress_length_div.getElementsByTagName('input')[i].value)){
        Dress_length_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Length_type items
function DisplayLength_typeItems(){
$('#hidden-items-Length_type').toggle(100);
}
Length_type_div = document.getElementById('hidden-items-Length_type');
if(searchParams.get("next[63]")!==null){
searchParams_Length_type = searchParams.get("next[63]").split(",");
for(var i=0;i<Length_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Length_type.includes(Length_type_div.getElementsByTagName('input')[i].value)){
        Length_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Saree_type items
function DisplaySaree_typeItems(){
$('#hidden-items-Saree_type').toggle(100);
}
Saree_type_div = document.getElementById('hidden-items-Saree_type');
if(searchParams.get("next[64]")!==null){
searchParams_Saree_type = searchParams.get("next[64]").split(",");
for(var i=0;i<Saree_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Saree_type.includes(Saree_type_div.getElementsByTagName('input')[i].value)){
        Saree_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Saree_style items
function DisplaySaree_styleItems(){
$('#hidden-items-Saree_style').toggle(100);
}
Saree_style_div = document.getElementById('hidden-items-Saree_style');
if(searchParams.get("next[65]")!==null){
searchParams_Saree_style = searchParams.get("next[65]").split(",");
for(var i=0;i<Saree_style_div.getElementsByTagName('input').length;i++){
    if(searchParams_Saree_style.includes(Saree_style_div.getElementsByTagName('input')[i].value)){
        Saree_style_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Saree_length items
function DisplaySaree_lengthItems(){
$('#hidden-items-Saree_length').toggle(100);
}
Saree_length_div = document.getElementById('hidden-items-Saree_length');
if(searchParams.get("next[66]")!==null){
searchParams_Saree_length = searchParams.get("next[66]").split(",");
for(var i=0;i<Saree_length_div.getElementsByTagName('input').length;i++){
    if(searchParams_Saree_length.includes(Saree_length_div.getElementsByTagName('input')[i].value)){
        Saree_length_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Blouse_included items
function DisplayBlouse_includedItems(){
$('#hidden-items-Blouse_included').toggle(100);
}
Blouse_included_div = document.getElementById('hidden-items-Blouse_included');
if(searchParams.get("next[67]")!==null){
searchParams_Blouse_included = searchParams.get("next[67]").split(",");
for(var i=0;i<Blouse_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Blouse_included.includes(Blouse_included_div.getElementsByTagName('input')[i].value)){
        Blouse_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Saree_Fall_length items
function DisplaySaree_Fall_lengthItems(){
$('#hidden-items-Saree_Fall_length').toggle(100);
}
Saree_Fall_length_div = document.getElementById('hidden-items-Saree_Fall_length');
if(searchParams.get("next[68]")!==null){
searchParams_Saree_Fall_length = searchParams.get("next[68]").split(",");
for(var i=0;i<Saree_Fall_length_div.getElementsByTagName('input').length;i++){
    if(searchParams_Saree_Fall_length.includes(Saree_Fall_length_div.getElementsByTagName('input')[i].value)){
        Saree_Fall_length_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Saree_Fall_width items
function DisplaySaree_Fall_widthItems(){
$('#hidden-items-Saree_Fall_width').toggle(100);
}
Saree_Fall_width_div = document.getElementById('hidden-items-Saree_Fall_width');
if(searchParams.get("next[69]")!==null){
searchParams_Saree_Fall_width = searchParams.get("next[69]").split(",");
for(var i=0;i<Saree_Fall_width_div.getElementsByTagName('input').length;i++){
    if(searchParams_Saree_Fall_width.includes(Saree_Fall_width_div.getElementsByTagName('input')[i].value)){
        Saree_Fall_width_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Dupatta_included items
function DisplayDupatta_includedItems(){
$('#hidden-items-Dupatta_included').toggle(100);
}
Dupatta_included_div = document.getElementById('hidden-items-Dupatta_included');
if(searchParams.get("next[70]")!==null){
searchParams_Dupatta_included = searchParams.get("next[70]").split(",");
for(var i=0;i<Dupatta_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Dupatta_included.includes(Dupatta_included_div.getElementsByTagName('input')[i].value)){
        Dupatta_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rechargeable items
function DisplayRechargeableItems(){
$('#hidden-items-Rechargeable').toggle(100);
}
Rechargeable_div = document.getElementById('hidden-items-Rechargeable');
if(searchParams.get("next[71]")!==null){
searchParams_Rechargeable = searchParams.get("next[71]").split(",");
for(var i=0;i<Rechargeable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rechargeable.includes(Rechargeable_div.getElementsByTagName('input')[i].value)){
        Rechargeable_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Battery_operated items
function DisplayBattery_operatedItems(){
$('#hidden-items-Battery_operated').toggle(100);
}
Battery_operated_div = document.getElementById('hidden-items-Battery_operated');
if(searchParams.get("next[72]")!==null){
searchParams_Battery_operated = searchParams.get("next[72]").split(",");
for(var i=0;i<Battery_operated_div.getElementsByTagName('input').length;i++){
    if(searchParams_Battery_operated.includes(Battery_operated_div.getElementsByTagName('input')[i].value)){
        Battery_operated_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Character items
function DisplayCharacterItems(){
$('#hidden-items-Character').toggle(100);
}
Character_div = document.getElementById('hidden-items-Character');
if(searchParams.get("next[73]")!==null){
searchParams_Character = searchParams.get("next[73]").split(",");
for(var i=0;i<Character_div.getElementsByTagName('input').length;i++){
    if(searchParams_Character.includes(Character_div.getElementsByTagName('input')[i].value)){
        Character_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Thermoware items
function DisplayThermowareItems(){
$('#hidden-items-Thermoware').toggle(100);
}
Thermoware_div = document.getElementById('hidden-items-Thermoware');
if(searchParams.get("next[74]")!==null){
searchParams_Thermoware = searchParams.get("next[74]").split(",");
for(var i=0;i<Thermoware_div.getElementsByTagName('input').length;i++){
    if(searchParams_Thermoware.includes(Thermoware_div.getElementsByTagName('input')[i].value)){
        Thermoware_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Age_group items
function DisplayAge_groupItems(){
$('#hidden-items-Age_group').toggle(100);
}
Age_group_div = document.getElementById('hidden-items-Age_group');
if(searchParams.get("next[75]")!==null){
searchParams_Age_group = searchParams.get("next[75]").split(",");
for(var i=0;i<Age_group_div.getElementsByTagName('input').length;i++){
    if(searchParams_Age_group.includes(Age_group_div.getElementsByTagName('input')[i].value)){
        Age_group_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Pot_included items
function DisplayPot_includedItems(){
$('#hidden-items-Pot_included').toggle(100);
}
Pot_included_div = document.getElementById('hidden-items-Pot_included');
if(searchParams.get("next[76]")!==null){
searchParams_Pot_included = searchParams.get("next[76]").split(",");
for(var i=0;i<Pot_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Pot_included.includes(Pot_included_div.getElementsByTagName('input')[i].value)){
        Pot_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Bonsai items
function DisplayBonsaiItems(){
$('#hidden-items-Bonsai').toggle(100);
}
Bonsai_div = document.getElementById('hidden-items-Bonsai');
if(searchParams.get("next[77]")!==null){
searchParams_Bonsai = searchParams.get("next[77]").split(",");
for(var i=0;i<Bonsai_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bonsai.includes(Bonsai_div.getElementsByTagName('input')[i].value)){
        Bonsai_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Outer_material items
function DisplayOuter_materialItems(){
$('#hidden-items-Outer_material').toggle(100);
}
Outer_material_div = document.getElementById('hidden-items-Outer_material');
if(searchParams.get("next[78]")!==null){
searchParams_Outer_material = searchParams.get("next[78]").split(",");
for(var i=0;i<Outer_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Outer_material.includes(Outer_material_div.getElementsByTagName('input')[i].value)){
        Outer_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Towel_type items
function DisplayTowel_typeItems(){
$('#hidden-items-Towel_type').toggle(100);
}
Towel_type_div = document.getElementById('hidden-items-Towel_type');
if(searchParams.get("next[79]")!==null){
searchParams_Towel_type = searchParams.get("next[79]").split(",");
for(var i=0;i<Towel_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Towel_type.includes(Towel_type_div.getElementsByTagName('input')[i].value)){
        Towel_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Reversible items
function DisplayReversibleItems(){
$('#hidden-items-Reversible').toggle(100);
}
Reversible_div = document.getElementById('hidden-items-Reversible');
if(searchParams.get("next[80]")!==null){
searchParams_Reversible = searchParams.get("next[80]").split(",");
for(var i=0;i<Reversible_div.getElementsByTagName('input').length;i++){
    if(searchParams_Reversible.includes(Reversible_div.getElementsByTagName('input')[i].value)){
        Reversible_div.getElementsByTagName('input')[i].checked=true;} } }

// To display width items
function DisplaywidthItems(){
$('#hidden-items-width').toggle(100);
}
width_div = document.getElementById('hidden-items-width');
if(searchParams.get("next[81]")!==null){
searchParams_width = searchParams.get("next[81]").split(",");
for(var i=0;i<width_div.getElementsByTagName('input').length;i++){
    if(searchParams_width.includes(width_div.getElementsByTagName('input')[i].value)){
       width_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Shape items
function DisplayShapeItems(){
$('#hidden-items-Shape').toggle(100);
}
Shape_div = document.getElementById('hidden-items-Shape');
if(searchParams.get("next[82]")!==null){
searchParams_Shape = searchParams.get("next[82]").split(",");
for(var i=0;i<Shape_div.getElementsByTagName('input').length;i++){
    if(searchParams_Shape.includes(Shape_div.getElementsByTagName('input')[i].value)){
        Shape_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Microwave_safe items
function DisplayMicrowave_safeItems(){
$('#hidden-items-Microwave_safe').toggle(100);
}
Microwave_safe_div = document.getElementById('hidden-items-Microwave_safe');
if(searchParams.get("next[83]")!==null){
searchParams_Microwave_safe = searchParams.get("next[83]").split(",");
for(var i=0;i<Microwave_safe_div.getElementsByTagName('input').length;i++){
    if(searchParams_Microwave_safe.includes(Microwave_safe_div.getElementsByTagName('input')[i].value)){
        Microwave_safe_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Showpiece_type items
function DisplayShowpiece_typeItems(){
$('#hidden-items-Showpiece_type').toggle(100);
}
Showpiece_type_div = document.getElementById('hidden-items-Showpiece_type');
if(searchParams.get("next[84]")!==null){
searchParams_Showpiece_type = searchParams.get("next[84]").split(",");
for(var i=0;i<Showpiece_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Showpiece_type.includes(Showpiece_type_div.getElementsByTagName('input')[i].value)){
        Showpiece_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display No_of_prongs items
function DisplayNo_of_prongsItems(){
$('#hidden-items-No_of_prongs').toggle(100);
}
No_of_prongs_div = document.getElementById('hidden-items-No_of_prongs');
if(searchParams.get("next[85]")!==null){
searchParams_No_of_prongs = searchParams.get("next[85]").split(",");
for(var i=0;i<No_of_prongs_div.getElementsByTagName('input').length;i++){
    if(searchParams_No_of_prongs.includes(No_of_prongs_div.getElementsByTagName('input')[i].value)){
        No_of_prongs_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Fragrance items
function DisplayFragranceItems(){
$('#hidden-items-Fragrance').toggle(100);
}
Fragrance_div = document.getElementById('hidden-items-Fragrance');
if(searchParams.get("next[86]")!==null){
searchParams_Fragrance = searchParams.get("next[86]").split(",");
for(var i=0;i<Fragrance_div.getElementsByTagName('input').length;i++){
    if(searchParams_Fragrance.includes(Fragrance_div.getElementsByTagName('input')[i].value)){
        Fragrance_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Quantity items
function DisplayQuantityItems(){
$('#hidden-items-Quantity').toggle(100);
}
Quantity_div = document.getElementById('hidden-items-Quantity');
if(searchParams.get("next[87]")!==null){
searchParams_Quantity = searchParams.get("next[87]").split(",");
for(var i=0;i<Quantity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Quantity.includes(Quantity_div.getElementsByTagName('input')[i].value)){
        Quantity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Form items
function DisplayFormItems(){
$('#hidden-items-Form').toggle(100);
}
Form_div = document.getElementById('hidden-items-Form');
if(searchParams.get("next[88]")!==null){
searchParams_Form = searchParams.get("next[88]").split(",");
for(var i=0;i<Form_div.getElementsByTagName('input').length;i++){
    if(searchParams_Form.includes(Form_div.getElementsByTagName('input')[i].value)){
        Form_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Light_used items
function DisplayLight_usedItems(){
$('#hidden-items-Light_used').toggle(100);
}
Light_used_div = document.getElementById('hidden-items-Light_used');
if(searchParams.get("next[89]")!==null){
searchParams_Light_used= searchParams.get("next[89]").split(",");
for(var i=0;i<Light_used_div.getElementsByTagName('input').length;i++){
    if(searchParams_Light_used.includes(Light_used_div.getElementsByTagName('input')[i].value)){
        Light_used_div.getElementsByTagName('input')[i].checked=true;} } }


// To display adjustable items
function DisplayadjustableItems(){
$('#hidden-items-adjustable').toggle(100);
}
adjustable_div = document.getElementById('hidden-items-adjustable');
if(searchParams.get("next[90]")!==null){
searchParams_adjustable = searchParams.get("next[90]").split(",");
for(var i=0;i<adjustable_div.getElementsByTagName('input').length;i++){
    if(searchParams_adjustable.includes(adjustable_div.getElementsByTagName('input')[i].value)){
        adjustable_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Mount_type items
function DisplayMount_typeItems(){
$('#hidden-items-Mount_type').toggle(100);
}
Mount_type_div = document.getElementById('hidden-items-Mount_type');
if(searchParams.get("next[91]")!==null){
searchParams_Mount_type = searchParams.get("next[91]").split(",");
for(var i=0;i<Mount_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Mount_type.includes(Mount_type_div.getElementsByTagName('input')[i].value)){
        Mount_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Bulb_included items
function DisplayBulb_includedItems(){
$('#hidden-items-Bulb_included').toggle(100);
}
Bulb_included_div = document.getElementById('hidden-items-Bulb_included');
if(searchParams.get("next[92]")!==null){
searchParams_Bulb_included = searchParams.get("next[92]").split(",");
for(var i=0;i<Bulb_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bulb_included.includes(Bulb_included_div.getElementsByTagName('input')[i].value)){
        Bulb_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Dimmable items
function DisplayDimmableItems(){
$('#hidden-items-Dimmable').toggle(100);
}
Dimmable_div = document.getElementById('hidden-items-Dimmable');
if(searchParams.get("next[93]")!==null){
searchParams_Dimmable = searchParams.get("next[93]").split(",");
for(var i=0;i<Dimmable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Dimmable.includes(Dimmable_div.getElementsByTagName('input')[i].value)){
        Dimmable_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Foldable items
function DisplayFoldableItems(){
$('#hidden-items-Foldable').toggle(100);
}
Foldable_div = document.getElementById('hidden-items-Foldable');
if(searchParams.get("next[94]")!==null){
searchParams_Foldable = searchParams.get("next[94]").split(",");
for(var i=0;i<Foldable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Foldable.includes(Foldable_div.getElementsByTagName('input')[i].value)){
        Foldable_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Adjustable_height items
function DisplayAdjustable_heightItems(){
$('#hidden-items-Adjustable_height').toggle(100);
}
Adjustable_height_div = document.getElementById('hidden-items-Adjustable_height');
if(searchParams.get("next[95]")!==null){
searchParams_Adjustable_height = searchParams.get("next[95]").split(",");
for(var i=0;i<Adjustable_height_div.getElementsByTagName('input').length;i++){
    if(searchParams_Adjustable_height.includes(Adjustable_height_div.getElementsByTagName('input')[i].value)){
        Adjustable_height_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Mouse_tray items
function DisplayMouse_trayItems(){
$('#hidden-items-Mouse_tray').toggle(100);
}
Mouse_tray_div = document.getElementById('hidden-items-Mouse_tray');
if(searchParams.get("next[96]")!==null){
searchParams_Mouse_tray = searchParams.get("next[96]").split(",");
for(var i=0;i<Mouse_tray_div.getElementsByTagName('input').length;i++){
    if(searchParams_Mouse_tray.includes(Mouse_tray_div.getElementsByTagName('input')[i].value)){
        Mouse_tray_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Height items
function DisplayHeightItems(){
$('#hidden-items-Height').toggle(100);
}
Height_div = document.getElementById('hidden-items-Height');
if(searchParams.get("next[97]")!==null){
searchParams_Height = searchParams.get("next[97]").split(",");
for(var i=0;i<Height_div.getElementsByTagName('input').length;i++){
    if(searchParams_Height.includes(Height_div.getElementsByTagName('input')[i].value)){
        Height_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Storage_included items
function DisplayStorage_includedItems(){
$('#hidden-items-Storage_included').toggle(100);
}
Storage_included_div = document.getElementById('hidden-items-Storage_included');
if(searchParams.get("next[98]")!==null){
searchParams_Storage_included = searchParams.get("next[98]").split(",");
for(var i=0;i<Storage_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Storage_included.includes(Storage_included_div.getElementsByTagName('input')[i].value)){
        Storage_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Separated items
function DisplaySeparatedItems(){
$('#hidden-items-Separated').toggle(100);
}
Separated_div = document.getElementById('hidden-items-Separated');
if(searchParams.get("next[99]")!==null){
searchParams_Separated = searchParams.get("next[99]").split(",");
for(var i=0;i<Separated_div.getElementsByTagName('input').length;i++){
    if(searchParams_Separated.includes(Separated_div.getElementsByTagName('input')[i].value)){
        Separated_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Weight items
function DisplayWeightItems(){
$('#hidden-items-Weight').toggle(100);
}
Weight_div = document.getElementById('hidden-items-Weight');
if(searchParams.get("next[100]")!==null){
searchParams_Weight = searchParams.get("next[100]").split(",");
for(var i=0;i<Weight_div.getElementsByTagName('input').length;i++){
    if(searchParams_Weight.includes(Weight_div.getElementsByTagName('input')[i].value)){
        Weight_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Heart_rate_sensor items
function DisplayHeart_rate_sensorItems(){
$('#hidden-items-Heart_rate_sensor').toggle(100);
}
Heart_rate_sensor_div = document.getElementById('hidden-items-Heart_rate_sensor');
if(searchParams.get("next[101]")!==null){
searchParams_Heart_rate_sensor = searchParams.get("next[101]").split(",");
for(var i=0;i<Heart_rate_sensor_div.getElementsByTagName('input').length;i++){
    if(searchParams_Heart_rate_sensor.includes(Heart_rate_sensor_div.getElementsByTagName('input')[i].value)){
        Heart_rate_sensor_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Design items
function DisplayDesignItems(){
$('#hidden-items-Design').toggle(100);
}
Design_div = document.getElementById('hidden-items-Design');
if(searchParams.get("next[102]")!==null){
searchParams_Design = searchParams.get("next[102]").split(",");
for(var i=0;i<Design_div.getElementsByTagName('input').length;i++){
    if(searchParams_Design.includes(Design_div.getElementsByTagName('input')[i].value)){
        Design_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Diameter items
function DisplayDiameterItems(){
$('#hidden-items-Diameter').toggle(100);
}
Diameter_div = document.getElementById('hidden-items-Diameter');
if(searchParams.get("next[103]")!==null){
searchParams_Diameter = searchParams.get("next[103]").split(",");
for(var i=0;i<Diameter_div.getElementsByTagName('input').length;i++){
    if(searchParams_Diameter.includes(Diameter_div.getElementsByTagName('input')[i].value)){
        Diameter_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Contains_pump items
function DisplayContains_pumpItems(){
$('#hidden-items-Contains_pump').toggle(100);
}
Contains_pump_div = document.getElementById('hidden-items-Contains_pump');
if(searchParams.get("next[104]")!==null){
searchParams_Contains_pump = searchParams.get("next[104]").split(",");
for(var i=0;i<Contains_pump_div.getElementsByTagName('input').length;i++){
    if(searchParams_Contains_pump.includes(Contains_pump_div.getElementsByTagName('input')[i].value)){
        Contains_pump_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Thickness items
function DisplayThicknessItems(){
$('#hidden-items-Thickness').toggle(100);
}
Thickness_div = document.getElementById('hidden-items-Thickness');
if(searchParams.get("next[105]")!==null){
searchParams_Thickness = searchParams.get("next[105]").split(",");
for(var i=0;i<Thickness_div.getElementsByTagName('input').length;i++){
    if(searchParams_Thickness.includes(Thickness_div.getElementsByTagName('input')[i].value)){
        Thickness_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Grip items
function DisplayGripItems(){
$('#hidden-items-Grip').toggle(100);
}
Grip_div = document.getElementById('hidden-items-Grip');
if(searchParams.get("next[106]")!==null){
searchParams_Grip = searchParams.get("next[106]").split(",");
for(var i=0;i<Grip_div.getElementsByTagName('input').length;i++){
    if(searchParams_Grip.includes(Grip_div.getElementsByTagName('input')[i].value)){
        Grip_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Playing_level items
function DisplayPlaying_levelItems(){
$('#hidden-items-Playing_level').toggle(100);
}
Playing_level_div = document.getElementById('hidden-items-Playing_level');
if(searchParams.get("next[107]")!==null){
searchParams_Playing_level = searchParams.get("next[107]").split(",");
for(var i=0;i<Playing_level_div.getElementsByTagName('input').length;i++){
    if(searchParams_Playing_level.includes(Playing_level_div.getElementsByTagName('input')[i].value)){
        Playing_level_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Strung_type items
function DisplayStrung_typeItems(){
$('#hidden-items-Strung_type').toggle(100);
}
Strung_type_div = document.getElementById('hidden-items-Strung_type');
if(searchParams.get("next[108]")!==null){
searchParams_Strung_type = searchParams.get("next[108]").split(",");
for(var i=0;i<Strung_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Strung_type.includes(Strung_type_div.getElementsByTagName('input')[i].value)){
        Strung_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Cover_type items
function DisplayCover_typeItems(){
$('#hidden-items-Cover_type').toggle(100);
}
Cover_type_div = document.getElementById('hidden-items-Cover_type');
if(searchParams.get("next[109]")!==null){
searchParams_Cover_type = searchParams.get("next[109]").split(",");
for(var i=0;i<Cover_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Cover_type.includes(Cover_type_div.getElementsByTagName('input')[i].value)){
        Cover_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Grip_size items
function DisplayGrip_sizeItems(){
$('#hidden-items-Grip_size').toggle(100);
}
Grip_size_div = document.getElementById('hidden-items-Grip_size');
if(searchParams.get("next[110]")!==null){
searchParams_Grip_size = searchParams.get("next[110]").split(",");
for(var i=0;i<Grip_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Grip_size.includes(Grip_size_div.getElementsByTagName('input')[i].value)){
        Grip_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Head_size items
function DisplayHead_sizeItems(){
$('#hidden-items-Head_size').toggle(100);
}
Head_size_div = document.getElementById('hidden-items-Head_size');
if(searchParams.get("next[111]")!==null){
searchParams_Head_size = searchParams.get("next[111]").split(",");
for(var i=0;i<Head_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Head_size.includes(Head_size_div.getElementsByTagName('input')[i].value)){
        Head_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Speed items
function DisplaySpeedItems(){
$('#hidden-items-Speed').toggle(100);
}
Speed_div = document.getElementById('hidden-items-Speed');
if(searchParams.get("next[112]")!==null){
searchParams_Speed = searchParams.get("next[112]").split(",");
for(var i=0;i<Speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Speed.includes(Speed_div.getElementsByTagName('input')[i].value)){
        Speed_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Willow_type items
function DisplayWillow_typeItems(){
$('#hidden-items-Willow_type').toggle(100);
}
Willow_type_div = document.getElementById('hidden-items-Willow_type');
if(searchParams.get("next[113]")!==null){
searchParams_Willow_type = searchParams.get("next[113]").split(",");
for(var i=0;i<Willow_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Willow_type.includes(Willow_type_div.getElementsByTagName('input')[i].value)){
        Willow_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Bat_grade items
function DisplayBat_gradeItems(){
$('#hidden-items-Bat_grade').toggle(100);
}
Bat_grade_div = document.getElementById('hidden-items-Bat_grade');
if(searchParams.get("next[114]")!==null){
searchParams_Bat_grade = searchParams.get("next[114]").split(",");
for(var i=0;i<Bat_grade_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bat_grade.includes(Bat_grade_div.getElementsByTagName('input')[i].value)){
        Bat_grade_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Cover items
function DisplayCoverItems(){
$('#hidden-items-Cover').toggle(100);
}
Cover_div = document.getElementById('hidden-items-Cover');
if(searchParams.get("next[115]")!==null){
searchParams_Cover = searchParams.get("next[115]").split(",");
for(var i=0;i<Cover_div.getElementsByTagName('input').length;i++){
    if(searchParams_Cover.includes(Cover_div.getElementsByTagName('input')[i].value)){
        Cover_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Visor items
function DisplayVisorItems(){
$('#hidden-items-Visor').toggle(100);
}
Visor_div = document.getElementById('hidden-items-Visor');
if(searchParams.get("next[116]")!==null){
searchParams_Visor = searchParams.get("next[116]").split(",");
for(var i=0;i<Visor_div.getElementsByTagName('input').length;i++){
    if(searchParams_Visor.includes(Visor_div.getElementsByTagName('input')[i].value)){
        Visor_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Bails_included items
function DisplayBails_includedItems(){
$('#hidden-items-Bails_included').toggle(100);
}
Bails_included_div = document.getElementById('hidden-items-Bails_included');
if(searchParams.get("next[117]")!==null){
searchParams_Bails_included = searchParams.get("next[117]").split(",");
for(var i=0;i<Bails_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bails_included.includes(Bails_included_div.getElementsByTagName('input')[i].value)){
        Bails_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Fill_type items
function DisplayFill_typeItems(){
$('#hidden-items-Fill_type').toggle(100);
}
Fill_type_div = document.getElementById('hidden-items-Fill_type');
if(searchParams.get("next[118]")!==null){
searchParams_Fill_type = searchParams.get("next[118]").split(",");
for(var i=0;i<Fill_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Fill_type.includes(Fill_type_div.getElementsByTagName('input')[i].value)){
        Fill_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Tyre_size items
function DisplayTyre_sizeItems(){
$('#hidden-items-Tyre_size').toggle(100);
}
Tyre_size_div = document.getElementById('hidden-items-Tyre_size');
if(searchParams.get("next[119]")!==null){
searchParams_Tyre_size = searchParams.get("next[119]").split(",");
for(var i=0;i<Tyre_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Tyre_size.includes(Tyre_size_div.getElementsByTagName('input')[i].value)){
        Tyre_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Gear_type items
function DisplayGear_typeItems(){
$('#hidden-items-Gear_type').toggle(100);
}
Gear_type_div = document.getElementById('hidden-items-Gear_type');
if(searchParams.get("next[120]")!==null){
searchParams_Gear_type = searchParams.get("next[120]").split(",");
for(var i=0;i<Gear_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Gear_type.includes(Gear_type_div.getElementsByTagName('input')[i].value)){
        Gear_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rear_brake items
function DisplayRear_brakeItems(){
$('#hidden-items-Rear_brake').toggle(100);
}
Rear_brake_div = document.getElementById('hidden-items-Rear_brake');
if(searchParams.get("next[121]")!==null){
searchParams_Rear_brake = searchParams.get("next[121]").split(",");
for(var i=0;i<Rear_brake_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rear_brake.includes(Rear_brake_div.getElementsByTagName('input')[i].value)){
        Rear_brake_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Front_brake items
function DisplayFront_brakeItems(){
$('#hidden-items-Front_brake').toggle(100);
}
Front_brake_div = document.getElementById('hidden-items-Front_brake');
if(searchParams.get("next[122]")!==null){
searchParams_Front_brake = searchParams.get("next[122]").split(",");
for(var i=0;i<Front_brake_div.getElementsByTagName('input').length;i++){
    if(searchParams_Front_brake.includes(Front_brake_div.getElementsByTagName('input')[i].value)){
        Front_brake_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Playback_mode items
function DisplayPlayback_modeItems(){
$('#hidden-items-Playback_mode').toggle(100);
}
Playback_mode_div = document.getElementById('hidden-items-Playback_mode');
if(searchParams.get("next[123]")!==null){
searchParams_Playback_mode = searchParams.get("next[123]").split(",");
for(var i=0;i<Playback_mode_div.getElementsByTagName('input').length;i++){
    if(searchParams_Playback_mode.includes(Playback_mode_div.getElementsByTagName('input')[i].value)){
        Playback_mode_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Accessory_holder items
function DisplayAccessory_holderItems(){
$('#hidden-items-Accessory_holder').toggle(100);
}
Accessory_holder_div = document.getElementById('hidden-items-Accessory_holder');
if(searchParams.get("next[124]")!==null){
searchParams_Accessory_holder = searchParams.get("next[124]").split(",");
for(var i=0;i<Accessory_holder_div.getElementsByTagName('input').length;i++){
    if(searchParams_Accessory_holder.includes(Accessory_holder_div.getElementsByTagName('input')[i].value)){
        Accessory_holder_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rod_power items
function DisplayRod_powerItems(){
$('#hidden-items-Rod_power').toggle(100);
}
Rod_power_div = document.getElementById('hidden-items-Rod_power');
if(searchParams.get("next[125]")!==null){
searchParams_Rod_power = searchParams.get("next[125]").split(",");
for(var i=0;i<Rod_power_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rod_power.includes(Rod_power_div.getElementsByTagName('input')[i].value)){
        Rod_power_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rod_type items
function DisplayRod_typeItems(){
$('#hidden-items-Rod_type').toggle(100);
}
Rod_type_div = document.getElementById('hidden-items-Rod_type');
if(searchParams.get("next[126]")!==null){
searchParams_Rod_type = searchParams.get("next[126]").split(",");
for(var i=0;i<Rod_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rod_type.includes(Rod_type_div.getElementsByTagName('input')[i].value)){
        Rod_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Rod_action items
function DisplayRod_actionItems(){
$('#hidden-items-Rod_action').toggle(100);
}
Rod_action_div = document.getElementById('hidden-items-Rod_action');
if(searchParams.get("next[127]")!==null){
searchParams_Rod_action = searchParams.get("next[127]").split(",");
for(var i=0;i<Rod_action_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rod_action.includes(Rod_action_div.getElementsByTagName('input')[i].value)){
        Rod_action_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Handle_material items
function DisplayHandle_materialItems(){
$('#hidden-items-Handle_material').toggle(100);
}
Handle_material_div = document.getElementById('hidden-items-Handle_material');
if(searchParams.get("next[128]")!==null){
searchParams_Handle_material = searchParams.get("next[128]").split(",");
for(var i=0;i<Handle_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Handle_material.includes(Handle_material_div.getElementsByTagName('input')[i].value)){
        Handle_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Construction items
function DisplayConstructionItems(){
$('#hidden-items-Construction').toggle(100);
}
Construction_div = document.getElementById('hidden-items-Construction');
if(searchParams.get("next[129]")!==null){
searchParams_Construction = searchParams.get("next[129]").split(",");
for(var i=0;i<Construction_div.getElementsByTagName('input').length;i++){
    if(searchParams_Construction.includes(Construction_div.getElementsByTagName('input')[i].value)){
        Construction_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Drag_type items
function DisplayDrag_typeItems(){
$('#hidden-items-Drag_type').toggle(100);
}
Drag_type_div = document.getElementById('hidden-items-Drag_type');
if(searchParams.get("next[130]")!==null){
searchParams_Drag_type = searchParams.get("next[130]").split(",");
for(var i=0;i<Drag_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Drag_type.includes(Drag_type_div.getElementsByTagName('input')[i].value)){
        Drag_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Container_type items
function DisplayContainer_typeItems(){
$('#hidden-items-Container_type').toggle(100);
}
Container_type_div = document.getElementById('hidden-items-Container_type');
if(searchParams.get("next[131]")!==null){
searchParams_Container_type = searchParams.get("next[131]").split(",");
for(var i=0;i<Container_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Container_type.includes(Container_type_div.getElementsByTagName('input')[i].value)){
        Container_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Edge_type items
function DisplayEdge_typeItems(){
$('#hidden-items-Edge_type').toggle(100);
}
Edge_type_div = document.getElementById('hidden-items-Edge_type');
if(searchParams.get("next[132]")!==null){
searchParams_Edge_type = searchParams.get("next[132]").split(",");
for(var i=0;i<Edge_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Edge_type.includes(Edge_type_div.getElementsByTagName('input')[i].value)){
        Edge_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Sheath items
function DisplaySheathItems(){
$('#hidden-items-Sheath').toggle(100);
}
Sheath_div = document.getElementById('hidden-items-Sheath');
if(searchParams.get("next[133]")!==null){
searchParams_Sheath = searchParams.get("next[133]").split(",");
for(var i=0;i<Sheath_div.getElementsByTagName('input').length;i++){
    if(searchParams_Sheath.includes(Sheath_div.getElementsByTagName('input')[i].value)){
        Sheath_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Coated items
function DisplayCoatedItems(){
$('#hidden-items-Coated').toggle(100);
}
Coated_div = document.getElementById('hidden-items-Coated');
if(searchParams.get("next[134]")!==null){
searchParams_Coated = searchParams.get("next[134]").split(",");
for(var i=0;i<Coated_div.getElementsByTagName('input').length;i++){
    if(searchParams_Coated.includes(Coated_div.getElementsByTagName('input')[i].value)){
        Coated_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Finish items
function DisplayFinishItems(){
$('#hidden-items-Finish').toggle(100);
}
Finish_div = document.getElementById('hidden-items-Finish');
if(searchParams.get("next[135]")!==null){
searchParams_Finish = searchParams.get("next[135]").split(",");
for(var i=0;i<Finish_div.getElementsByTagName('input').length;i++){
    if(searchParams_Finish.includes(Finish_div.getElementsByTagName('input')[i].value)){
       Finish_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Attachment_type items
function DisplayAttachment_typeItems(){
$('#hidden-items-Attachment_type').toggle(100);
}
Attachment_type_div = document.getElementById('hidden-items-Attachment_type');
if(searchParams.get("next[136]")!==null){
searchParams_Attachment_type = searchParams.get("next[136]").split(",");
for(var i=0;i<Attachment_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Attachment_type.includes(Attachment_type_div.getElementsByTagName('input')[i].value)){
        Attachment_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Auto_locking items
function DisplayAuto_lockingItems(){
$('#hidden-items-Auto_locking').toggle(100);
}
Auto_locking_div = document.getElementById('hidden-items-Auto_locking');
if(searchParams.get("next[137]")!==null){
searchParams_Auto_locking = searchParams.get("next[137]").split(",");
for(var i=0;i<Auto_locking_div.getElementsByTagName('input').length;i++){
    if(searchParams_Auto_locking.includes(Auto_locking_div.getElementsByTagName('input')[i].value)){
        Auto_locking_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Tray_included items
function DisplayTray_includedItems(){
$('#hidden-items-Tray_included').toggle(100);
}
Tray_included_div = document.getElementById('hidden-items-Tray_included');
if(searchParams.get("next[138]")!==null){
searchParams_Tray_included = searchParams.get("next[138]").split(",");
for(var i=0;i<Tray_included_div.getElementsByTagName('input').length;i++){
    if(searchParams_Tray_included.includes(Tray_included_div.getElementsByTagName('input')[i].value)){
        Tray_included_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Magnetic items
function DisplayMagneticItems(){
$('#hidden-items-Magnetic').toggle(100);
}
Magnetic_div = document.getElementById('hidden-items-Magnetic');
if(searchParams.get("next[139]")!==null){
searchParams_Magnetic = searchParams.get("next[139]").split(",");
for(var i=0;i<Magnetic_div.getElementsByTagName('input').length;i++){
    if(searchParams_Magnetic.includes(Magnetic_div.getElementsByTagName('input')[i].value)){
        Magnetic_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Diary_type items
function DisplayDiary_typeItems(){
$('#hidden-items-Diary_type').toggle(100);
}
Diary_type_div = document.getElementById('hidden-items-Diary_type');
if(searchParams.get("next[140]")!==null){
searchParams_Diary_type = searchParams.get("next[140]").split(",");
for(var i=0;i<Diary_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Diary_type.includes(Diary_type_div.getElementsByTagName('input')[i].value)){
        Diary_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Steam_burst items
function DisplaySteam_burstItems(){
$('#hidden-items-Steam_burst').toggle(100);
}
Steam_burst_div = document.getElementById('hidden-items-Steam_burst');
if(searchParams.get("next[141]")!==null){
searchParams_Steam_burst= searchParams.get("next[141]").split(",");
for(var i=0;i<Steam_burst_div.getElementsByTagName('input').length;i++){
    if(searchParams_Steam_burst.includes(Steam_burst_div.getElementsByTagName('input')[i].value)){
        Steam_burst_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Spray items
function DisplaySprayItems(){
$('#hidden-items-Spray').toggle(100);
}
Spray_div = document.getElementById('hidden-items-Spray');
if(searchParams.get("next[142]")!==null){
searchParams_Spray = searchParams.get("next[142]").split(",");
for(var i=0;i<Spray_div.getElementsByTagName('input').length;i++){
    if(searchParams_Spray.includes(Spray_div.getElementsByTagName('input')[i].value)){
        Spray_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Power_consumption items
function DisplayPower_consumptionItems(){
$('#hidden-items-Power_consumption').toggle(100);
}
Power_consumption_div = document.getElementById('hidden-items-Power_consumption');
if(searchParams.get("next[143]")!==null){
searchParams_Power_consumption = searchParams.get("next[143]").split(",");
for(var i=0;i<Power_consumption_div.getElementsByTagName('input').length;i++){
    if(searchParams_Power_consumption.includes(Power_consumption_div.getElementsByTagName('input')[i].value)){
        Power_consumption_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Rated_pressure items
function DisplayRated_pressureItems(){
$('#hidden-items-Rated_pressure').toggle(100);
}
Rated_pressure_div = document.getElementById('hidden-items-Rated_pressure');
if(searchParams.get("next[144]")!==null){
searchParams_Rated_pressure = searchParams.get("next[144]").split(",");
for(var i=0;i<Rated_pressure_div.getElementsByTagName('input').length;i++){
    if(searchParams_Rated_pressure.includes(Rated_pressure_div.getElementsByTagName('input')[i].value)){
        Rated_pressure_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Star_rating items
function DisplayStar_ratingItems(){
$('#hidden-items-Star_rating').toggle(100);
}
Star_rating_div = document.getElementById('hidden-items-Star_rating');
if(searchParams.get("next[145]")!==null){
searchParams_Star_rating = searchParams.get("next[145]").split(",");
for(var i=0;i<Star_rating_div.getElementsByTagName('input').length;i++){
    if(searchParams_Star_rating.includes(Star_rating_div.getElementsByTagName('input')[i].value)){
        Star_rating_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Filter_type items
function DisplayFilter_typeItems(){
$('#hidden-items-Filter_type').toggle(100);
}
Filter_type_div = document.getElementById('hidden-items-Filter_type');
if(searchParams.get("next[146]")!==null){
searchParams_Filter_type = searchParams.get("next[146]").split(",");
for(var i=0;i<Filter_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Filter_type.includes(Filter_type_div.getElementsByTagName('input')[i].value)){
        Filter_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Auto_revolving_heater items
function DisplayAuto_revolving_heaterItems(){
$('#hidden-items-Auto_revolving_heater').toggle(100);
}
Auto_revolving_heater_div = document.getElementById('hidden-items-Auto_revolving_heater');
if(searchParams.get("next[147]")!==null){
searchParams_Auto_revolving_heater = searchParams.get("next[147]").split(",");
for(var i=0;i<Auto_revolving_heater_div.getElementsByTagName('input').length;i++){
    if(searchParams_Auto_revolving_heater.includes(Auto_revolving_heater_div.getElementsByTagName('input')[i].value)){
        Auto_revolving_heater_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Number_of_stitches items
function DisplayNumber_of_stitchesItems(){
$('#hidden-items-Number_of_stitches').toggle(100);
}
Number_of_stitches_div = document.getElementById('hidden-items-Number_of_stitches');
if(searchParams.get("next[148]")!==null){
searchParams_Number_of_stitches = searchParams.get("next[148]").split(",");
for(var i=0;i<Number_of_stitches_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_stitches.includes(Number_of_stitches_div.getElementsByTagName('input')[i].value)){
        Number_of_stitches_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_blades items
function DisplayNumber_of_bladesItems(){
$('#hidden-items-Number_of_blades').toggle(100);
}
Number_of_blades_div = document.getElementById('hidden-items-Number_of_blades');
if(searchParams.get("next[149]")!==null){
searchParams_Number_of_blades = searchParams.get("next[149]").split(",");
for(var i=0;i<Number_of_blades_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_blades.includes(Number_of_blades_div.getElementsByTagName('input')[i].value)){
        Number_of_blades_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Load_type items
function DisplayLoad_typeItems(){
$('#hidden-items-Load_type').toggle(100);
}
Load_type_div = document.getElementById('hidden-items-Load_type');
if(searchParams.get("next[150]")!==null){
searchParams_Load_type = searchParams.get("next[150]").split(",");
for(var i=0;i<Load_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Load_type.includes(Load_type_div.getElementsByTagName('input')[i].value)){
        Load_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_ways items
function DisplayNumber_of_waysItems(){
$('#hidden-items-Number_of_ways').toggle(100);
}
Number_of_ways_div = document.getElementById('hidden-items-Number_of_ways');
if(searchParams.get("next[151]")!==null){
searchParams_Number_of_ways = searchParams.get("next[151]").split(",");
for(var i=0;i<Number_of_ways_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_ways.includes(Number_of_ways_div.getElementsByTagName('input')[i].value)){
        Number_of_ways_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Wired_or_wireless items
function DisplayWired_or_wirelessItems(){
$('#hidden-items-Wired_or_wireless').toggle(100);
}
Wired_or_wireless_div = document.getElementById('hidden-items-Wired_or_wireless');
if(searchParams.get("next[152]")!==null){
searchParams_Wired_or_wireless = searchParams.get("next[152]").split(",");
for(var i=0;i<Wired_or_wireless_div.getElementsByTagName('input').length;i++){
    if(searchParams_Wired_or_wireless.includes(Wired_or_wireless_div.getElementsByTagName('input')[i].value)){
        Wired_or_wireless_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Energy_ratings items
function DisplayEnergy_ratingsItems(){
$('#hidden-items-Energy_ratings').toggle(100);
}
Energy_ratings_div = document.getElementById('hidden-items-Energy_ratings');
if(searchParams.get("next[153]")!==null){
searchParams_Energy_ratings = searchParams.get("next[153]").split(",");
for(var i=0;i<Energy_ratings_div.getElementsByTagName('input').length;i++){
    if(searchParams_Energy_ratings.includes(Energy_ratings_div.getElementsByTagName('input')[i].value)){
        Energy_ratings_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Condenser_coil items
function DisplayCondenser_coilItems(){
$('#hidden-items-Condenser_coil').toggle(100);
}
Condenser_coil_div = document.getElementById('hidden-items-Condenser_coil');
if(searchParams.get("next[154]")!==null){
searchParams_Condenser_coil = searchParams.get("next[154]").split(",");
for(var i=0;i<Condenser_coil_div.getElementsByTagName('input').length;i++){
    if(searchParams_Condenser_coil.includes(Condenser_coil_div.getElementsByTagName('input')[i].value)){
        Condenser_coil_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Ideal_for items
function DisplayIdeal_forItems(){
$('#hidden-items-Ideal_for').toggle(100);
}
Ideal_for_div = document.getElementById('hidden-items-Ideal_for');
if(searchParams.get("next[155]")!==null){
searchParams_Ideal_for = searchParams.get("next[155]").split(",");
for(var i=0;i<Ideal_for_div.getElementsByTagName('input').length;i++){
    if(searchParams_Ideal_for.includes(Ideal_for_div.getElementsByTagName('input')[i].value)){
        Ideal_for_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Technology items
function DisplayTechnologyItems(){
$('#hidden-items-Technology').toggle(100);
}
Technology_div = document.getElementById('hidden-items-Technology');
if(searchParams.get("next[156]")!==null){
searchParams_Technology = searchParams.get("next[156]").split(",");
for(var i=0;i<Technology_div.getElementsByTagName('input').length;i++){
    if(searchParams_Technology.includes(Technology_div.getElementsByTagName('input')[i].value)){
        Technology_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Defrosting_type items
function DisplayDefrosting_typeItems(){
$('#hidden-items-Defrosting_type').toggle(100);
}
Defrosting_type_div = document.getElementById('hidden-items-Defrosting_type');
if(searchParams.get("next[157]")!==null){
searchParams_Defrosting_type = searchParams.get("next[157]").split(",");
for(var i=0;i<Defrosting_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Defrosting_type.includes(Defrosting_type_div.getElementsByTagName('input')[i].value)){
        Defrosting_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Year items
function DisplayYearItems(){
$('#hidden-items-Year').toggle(100);
}
Year_div = document.getElementById('hidden-items-Year');
if(searchParams.get("next[158]")!==null){
searchParams_Year = searchParams.get("next[158]").split(",");
for(var i=0;i<Year_div.getElementsByTagName('input').length;i++){
    if(searchParams_Year.includes(Year_div.getElementsByTagName('input')[i].value)){
        Year_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Star items
function DisplayStarItems(){
$('#hidden-items-Star').toggle(100);
}
Star_div = document.getElementById('hidden-items-Star');
if(searchParams.get("next[159]")!==null){
searchParams_Star = searchParams.get("next[159]").split(",");
for(var i=0;i<Star_div.getElementsByTagName('input').length;i++){
    if(searchParams_Star.includes(Star_div.getElementsByTagName('input')[i].value)){
        Star_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Bee_rating items
function DisplayBee_ratingItems(){
$('#hidden-items-Bee_rating').toggle(100);
}
Bee_rating_div = document.getElementById('hidden-items-Bee_rating');
if(searchParams.get("next[160]")!==null){
searchParams_Bee_rating = searchParams.get("next[160]").split(",");
for(var i=0;i<Bee_rating_div.getElementsByTagName('input').length;i++){
    if(searchParams_Bee_rating.includes(Bee_rating_div.getElementsByTagName('input')[i].value)){
        Bee_rating_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Washing_system items
function DisplayWashing_systemItems(){
$('#hidden-items-Washing_system').toggle(100);
}
Washing_system_div = document.getElementById('hidden-items-Washing_system');
if(searchParams.get("next[161]")!==null){
searchParams_Washing_system = searchParams.get("next[161]").split(",");
for(var i=0;i<Washing_system_div.getElementsByTagName('input').length;i++){
    if(searchParams_Washing_system.includes(Washing_system_div.getElementsByTagName('input')[i].value)){
        Washing_system_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Power items
function DisplayPowerItems(){
$('#hidden-items-Power').toggle(100);
}
Power_div = document.getElementById('hidden-items-Power');
if(searchParams.get("next[162]")!==null){
searchParams_Power = searchParams.get("next[162]").split(",");
for(var i=0;i<Power_div.getElementsByTagName('input').length;i++){
    if(searchParams_Power.includes(Power_div.getElementsByTagName('input')[i].value)){
        Power_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Control items
function DisplayControlItems(){
$('#hidden-items-Control').toggle(100);
}
Control_div = document.getElementById('hidden-items-Control');
if(searchParams.get("next[163]")!==null){
searchParams_Control = searchParams.get("next[163]").split(",");
for(var i=0;i<Control_div.getElementsByTagName('input').length;i++){
    if(searchParams_Control.includes(Control_div.getElementsByTagName('input')[i].value)){
        Control_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Ductless items
function DisplayDuctlessItems(){
$('#hidden-items-Ductless').toggle(100);
}
Ductless_div = document.getElementById('hidden-items-Ductless');
if(searchParams.get("next[164]")!==null){
searchParams_Ductless = searchParams.get("next[164]").split(",");
for(var i=0;i<Ductless_div.getElementsByTagName('input').length;i++){
    if(searchParams_Ductless.includes(Ductless_div.getElementsByTagName('input')[i].value)){
        Ductless_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Auto_clean items
function DisplayAuto_cleanItems(){
$('#hidden-items-Auto_clean').toggle(100);
}
Auto_clean_div = document.getElementById('hidden-items-Auto_clean');
if(searchParams.get("next[165]")!==null){
searchParams_Auto_clean = searchParams.get("next[165]").split(",");
for(var i=0;i<Auto_clean_div.getElementsByTagName('input').length;i++){
    if(searchParams_Auto_clean.includes(Auto_clean_div.getElementsByTagName('input')[i].value)){
        Auto_clean_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Cups items
function DisplayCupsItems(){
$('#hidden-items-Cups').toggle(100);
}
Cups_div = document.getElementById('hidden-items-Cups');
if(searchParams.get("next[166]")!==null){
searchParams_Cups = searchParams.get("next[166]").split(",");
for(var i=0;i<Cups_div.getElementsByTagName('input').length;i++){
    if(searchParams_Cups.includes(Cups_div.getElementsByTagName('input')[i].value)){
       Cups_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_eggs items
function DisplayNumber_of_eggsItems(){
$('#hidden-items-Number_of_eggs').toggle(100);
}
Number_of_eggs_div = document.getElementById('hidden-items-Number_of_eggs');
if(searchParams.get("next[167]")!==null){
searchParams_Number_of_eggs = searchParams.get("next[167]").split(",");
for(var i=0;i<Number_of_eggs_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_eggs.includes(Number_of_eggs_div.getElementsByTagName('input')[i].value)){
        Number_of_eggs_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Number_of_slices items
function DisplayNumber_of_slicesItems(){
$('#hidden-items-Number_of_slices').toggle(100);
}
Number_of_slices_div = document.getElementById('hidden-items-Number_of_slices');
if(searchParams.get("next[168]")!==null){
searchParams_Number_of_slices = searchParams.get("next[168]").split(",");
for(var i=0;i<Number_of_slices_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_slices.includes(Number_of_slices_div.getElementsByTagName('input')[i].value)){
       Number_of_slices_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Screen_size items
function DisplayScreen_sizeItems(){
$('#hidden-items-Screen_size').toggle(100);
}
Screen_size_div = document.getElementById('hidden-items-Screen_size');
if(searchParams.get("next[169]")!==null){
searchParams_Screen_size = searchParams.get("next[169]").split(",");
for(var i=0;i<Screen_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Screen_size.includes(Screen_size_div.getElementsByTagName('input')[i].value)){
        Screen_size_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Operating_system items
function DisplayOperating_systemItems(){
$('#hidden-items-Operating_system').toggle(100);
}
Operating_system_div = document.getElementById('hidden-items-Operating_system');
if(searchParams.get("next[170]")!==null){
searchParams_Operating_system = searchParams.get("next[170]").split(",");
for(var i=0;i<Operating_system_div.getElementsByTagName('input').length;i++){
    if(searchParams_Operating_system.includes(Operating_system_div.getElementsByTagName('input')[i].value)){
        Operating_system_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Hard_disk_capacity items
function DisplayHard_disk_capacityItems(){
$('#hidden-items-Hard_disk_capacity').toggle(100);
}
Hard_disk_capacity_div = document.getElementById('hidden-items-Hard_disk_capacity');
if(searchParams.get("next[171]")!==null){
searchParams_Hard_disk_capacity = searchParams.get("next[171]").split(",");
for(var i=0;i<Hard_disk_capacity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Hard_disk_capacity.includes(Hard_disk_capacity_div.getElementsByTagName('input')[i].value)){
        Hard_disk_capacity_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Storage_type items
function DisplayStorage_typeItems(){
$('#hidden-items-Storage_type').toggle(100);
}
Storage_type_div = document.getElementById('hidden-items-Storage_type');
if(searchParams.get("next[172]")!==null){
searchParams_Storage_type = searchParams.get("next[172]").split(",");
for(var i=0;i<Storage_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Storage_type.includes(Storage_type_div.getElementsByTagName('input')[i].value)){
        Storage_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Processor items
function DisplayProcessorItems(){
$('#hidden-items-Processor').toggle(100);
}
Processor_div = document.getElementById('hidden-items-Processor');
if(searchParams.get("next[173]")!==null){
searchParams_Processor = searchParams.get("next[173]").split(",");
for(var i=0;i<Processor_div.getElementsByTagName('input').length;i++){
    if(searchParams_Processor.includes(Processor_div.getElementsByTagName('input')[i].value)){
        Processor_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Processor_brand items
function DisplayProcessor_brandItems(){
$('#hidden-items-Processor_brand').toggle(100);
}
Processor_brand_div = document.getElementById('hidden-items-Processor_brand');
if(searchParams.get("next[174]")!==null){
searchParams_Processor_brand = searchParams.get("next[174]").split(",");
for(var i=0;i<Processor_brand_div.getElementsByTagName('input').length;i++){
    if(searchParams_Processor_brand.includes(Processor_brand_div.getElementsByTagName('input')[i].value)){
        Processor_brand_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Processor_gen items
function DisplayProcessor_genItems(){
$('#hidden-items-Processor_gen').toggle(100);
}
Processor_gen_div = document.getElementById('hidden-items-Processor_gen');
if(searchParams.get("next[175]")!==null){
searchParams_Processor_gen = searchParams.get("next[175]").split(",");
for(var i=0;i<Processor_gen_div.getElementsByTagName('input').length;i++){
    if(searchParams_Processor_gen.includes(Processor_gen_div.getElementsByTagName('input')[i].value)){
        Processor_gen_div.getElementsByTagName('input')[i].checked=true;} } }


// To display RAM_type items
function DisplayRAM_typeItems(){
$('#hidden-items-RAM_type').toggle(100);
}
RAM_type_div = document.getElementById('hidden-items-RAM_type');
if(searchParams.get("next[176]")!==null){
searchParams_RAM_type = searchParams.get("next[176]").split(",");
for(var i=0;i<RAM_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_RAM_type.includes(RAM_type_div.getElementsByTagName('input')[i].value)){
        RAM_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display RAM items
function DisplayRAMItems(){
$('#hidden-items-RAM').toggle(100);
}
RAM_div = document.getElementById('hidden-items-RAM');
if(searchParams.get("next[177]")!==null){
searchParams_RAM = searchParams.get("next[177]").split(",");
for(var i=0;i<RAM_div.getElementsByTagName('input').length;i++){
    if(searchParams_RAM.includes(RAM_div.getElementsByTagName('input')[i].value)){
        RAM_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Graphics items
function DisplayGraphicsItems(){
$('#hidden-items-Graphics').toggle(100);
}
Graphics_div = document.getElementById('hidden-items-Graphics');
if(searchParams.get("next[178]")!==null){
searchParams_Graphics = searchParams.get("next[178]").split(",");
for(var i=0;i<Graphics_div.getElementsByTagName('input').length;i++){
    if(searchParams_Graphics.includes(Graphics_div.getElementsByTagName('input')[i].value)){
        Graphics_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Graphics_name items
function DisplayGraphics_nameItems(){
$('#hidden-items-Graphics_name').toggle(100);
}
Graphics_name_div = document.getElementById('hidden-items-Graphics_name');
if(searchParams.get("next[179]")!==null){
searchParams_Graphics_name = searchParams.get("next[179]").split(",");
for(var i=0;i<Graphics_name_div.getElementsByTagName('input').length;i++){
    if(searchParams_Graphics_name.includes(Graphics_name_div.getElementsByTagName('input')[i].value)){
        Graphics_name_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Graphics_processor_series items
function DisplayGraphics_processor_seriesItems(){
$('#hidden-items-Graphics_processor_series').toggle(100);
}
Graphics_processor_series_div = document.getElementById('hidden-items-Graphics_processor_series');
if(searchParams.get("next[180]")!==null){
searchParams_Graphics_processor_series = searchParams.get("next[180]").split(",");
for(var i=0;i<Graphics_processor_series_div.getElementsByTagName('input').length;i++){
    if(searchParams_Graphics_processor_series.includes(Graphics_processor_series_div.getElementsByTagName('input')[i].value)){
        Graphics_processor_series_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Graphics_memory_type items
function DisplayGraphics_memory_typeItems(){
$('#hidden-items-Graphics_memory_type').toggle(100);
}
Graphics_memory_type_div = document.getElementById('hidden-items-Graphics_memory_type');
if(searchParams.get("next[181]")!==null){
searchParams_Graphics_memory_type = searchParams.get("next[181]").split(",");
for(var i=0;i<Graphics_memory_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Graphics_memory_type.includes(Graphics_memory_type_div.getElementsByTagName('input')[i].value)){
        Graphics_memory_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Touch_screen items
function DisplayTouch_screenItems(){
$('#hidden-items-Touch_screen').toggle(100);
}
Touch_screen_div = document.getElementById('hidden-items-Touch_screen');
if(searchParams.get("next[182]")!==null){
searchParams_Touch_screen = searchParams.get("next[182]").split(",");
for(var i=0;i<Touch_screen_div.getElementsByTagName('input').length;i++){
    if(searchParams_Touch_screen.includes(Touch_screen_div.getElementsByTagName('input')[i].value)){
        Touch_screen_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Interface items
function DisplayInterfaceItems(){
$('#hidden-items-Interface').toggle(100);
}
Interface_div = document.getElementById('hidden-items-Interface');
if(searchParams.get("next[183]")!==null){
searchParams_Interface = searchParams.get("next[183]").split(",");
for(var i=0;i<Interface_div.getElementsByTagName('input').length;i++){
    if(searchParams_Interface.includes(Interface_div.getElementsByTagName('input')[i].value)){
        Interface_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Water_proof items
function DisplayWater_proofItems(){
$('#hidden-items-Water_proof').toggle(100);
}
Water_proof_div = document.getElementById('hidden-items-Water_proof');
if(searchParams.get("next[184]")!==null){
searchParams_Water_proof = searchParams.get("next[184]").split(",");
for(var i=0;i<Water_proof_div.getElementsByTagName('input').length;i++){
    if(searchParams_Water_proof.includes(Water_proof_div.getElementsByTagName('input')[i].value)){
        Water_proof_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Operation_type items
function DisplayOperation_typeItems(){
$('#hidden-items-Operation_type').toggle(100);
}
Operation_type_div = document.getElementById('hidden-items-Operation_type');
if(searchParams.get("next[185]")!==null){
searchParams_Operation_type = searchParams.get("next[185]").split(",");
for(var i=0;i<Operation_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Operation_type.includes(Operation_type_div.getElementsByTagName('input')[i].value)){
        Operation_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_cells items
function DisplayNumber_of_cellsItems(){
$('#hidden-items-Number_of_cells').toggle(100);
}
Number_of_cells_div = document.getElementById('hidden-items-Number_of_cells');
if(searchParams.get("next[186]")!==null){
searchParams_Number_of_cells = searchParams.get("next[186]").split(",");
for(var i=0;i<Number_of_cells_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_cells.includes(Number_of_cells_div.getElementsByTagName('input')[i].value)){
       Number_of_cells_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Compatible_laptop_size items
function DisplayCompatible_laptop_sizeItems(){
$('#hidden-items-Compatible_laptop_size').toggle(100);
}
Compatible_laptop_size_div = document.getElementById('hidden-items-Compatible_laptop_size');
if(searchParams.get("next[187]")!==null){
searchParams_Compatible_laptop_size = searchParams.get("next[187]").split(",");
for(var i=0;i<Compatible_laptop_size_div.getElementsByTagName('input').length;i++){
    if(searchParams_Compatible_laptop_size.includes(Compatible_laptop_size_div.getElementsByTagName('input')[i].value)){
        Compatible_laptop_size_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Ergonomic items
function DisplayErgonomicItems(){
$('#hidden-items-Ergonomic').toggle(100);
}
Ergonomic_div = document.getElementById('hidden-items-Ergonomic');
if(searchParams.get("next[188]")!==null){
searchParams_Ergonomic = searchParams.get("next[188]").split(",");
for(var i=0;i<Ergonomic_div.getElementsByTagName('input').length;i++){
    if(searchParams_Ergonomic.includes(Ergonomic_div.getElementsByTagName('input')[i].value)){
        Ergonomic_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Illuminated_keys items
function DisplayIlluminated_keysItems(){
$('#hidden-items-Illuminated_keys').toggle(100);
}
Illuminated_keys_div = document.getElementById('hidden-items-Illuminated_keys');
if(searchParams.get("next[189]")!==null){
searchParams_Illuminated_keys = searchParams.get("next[189]").split(",");
for(var i=0;i<Illuminated_keys_div.getElementsByTagName('input').length;i++){
    if(searchParams_Illuminated_keys.includes(Illuminated_keys_div.getElementsByTagName('input')[i].value)){
        Illuminated_keys_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Shock_resistance items
function DisplayShock_resistanceItems(){
$('#hidden-items-Shock_resistance').toggle(100);
}
Shock_resistance_div = document.getElementById('hidden-items-Shock_resistance');
if(searchParams.get("next[190]")!==null){
searchParams_Shock_resistance = searchParams.get("next[190]").split(",");
for(var i=0;i<Shock_resistance_div.getElementsByTagName('input').length;i++){
    if(searchParams_Shock_resistance.includes(Shock_resistance_div.getElementsByTagName('input')[i].value)){
        Shock_resistance_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Wireless_speed items
function DisplayWireless_speedItems(){
$('#hidden-items-Wireless_speed').toggle(100);
}
Wireless_speed_div = document.getElementById('hidden-items-Wireless_speed');
if(searchParams.get("next[191]")!==null){
searchParams_Wireless_speed = searchParams.get("next[191]").split(",");
for(var i=0;i<Wireless_speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Wireless_speed.includes(Wireless_speed_div.getElementsByTagName('input')[i].value)){
        Wireless_speed_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_Ethernet_ports items
function DisplayNumber_of_Ethernet_portsItems(){
$('#hidden-items-Number_of_Ethernet_ports').toggle(100);
}
Number_of_Ethernet_ports_div = document.getElementById('hidden-items-Number_of_Ethernet_ports');
if(searchParams.get("next[192]")!==null){
searchParams_Number_of_Ethernet_ports = searchParams.get("next[192]").split(",");
for(var i=0;i<Number_of_Ethernet_ports_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_Ethernet_ports.includes(Number_of_Ethernet_ports_div.getElementsByTagName('input')[i].value)){
        Number_of_Ethernet_ports_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Transfer_speed items
function DisplayTransfer_speedItems(){
$('#hidden-items-Transfer_speed').toggle(100);
}
Transfer_speed_div = document.getElementById('hidden-items-Transfer_speed');
if(searchParams.get("next[193]")!==null){
searchParams_Transfer_speed= searchParams.get("next[193]").split(",");
for(var i=0;i<Transfer_speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Transfer_speed.includes(Transfer_speed_div.getElementsByTagName('input')[i].value)){
        Transfer_speed_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Voice_support items
function DisplayVoice_supportItems(){
$('#hidden-items-Voice_support').toggle(100);
}
Voice_support_div = document.getElementById('hidden-items-Voice_support');
if(searchParams.get("next[194]")!==null){
searchParams_Voice_support = searchParams.get("next[194]").split(",");
for(var i=0;i<Voice_support_div.getElementsByTagName('input').length;i++){
    if(searchParams_Voice_support.includes(Voice_support_div.getElementsByTagName('input')[i].value)){
        Voice_support_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Memory_capacity items
function DisplayMemory_capacityItems(){
$('#hidden-items-Memory_capacity').toggle(100);
}
Memory_capacity_div = document.getElementById('hidden-items-Memory_capacity');
if(searchParams.get("next[195]")!==null){
searchParams_Memory_capacity = searchParams.get("next[195]").split(",");
for(var i=0;i<Memory_capacity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Memory_capacity.includes(Memory_capacity_div.getElementsByTagName('input')[i].value)){
        Memory_capacity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Max_wireless_transmission_rate items
function DisplayMax_wireless_transmission_rateItems(){
$('#hidden-items-Max_wireless_transmission_rate').toggle(100);
}
Max_wireless_transmission_rate_div = document.getElementById('hidden-items-Max_wireless_transmission_rate');
if(searchParams.get("next[196]")!==null){
searchParams_Max_wireless_transmission_rate = searchParams.get("next[196]").split(",");
for(var i=0;i<Max_wireless_transmission_rate_div.getElementsByTagName('input').length;i++){
    if(searchParams_Max_wireless_transmission_rate.includes(Max_wireless_transmission_rate_div.getElementsByTagName('input')[i].value)){
        Max_wireless_transmission_rate_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Frequency_band items
function DisplayFrequency_bandItems(){
$('#hidden-items-Frequency_band').toggle(100);
}
Frequency_band_div = document.getElementById('hidden-items-Frequency_band');
if(searchParams.get("next[197]")!==null){
searchParams_Frequency_band = searchParams.get("next[197]").split(",");
for(var i=0;i<Frequency_band_div.getElementsByTagName('input').length;i++){
    if(searchParams_Frequency_band.includes(Frequency_band_div.getElementsByTagName('input')[i].value)){
        Frequency_band_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Compatibility items
function DisplayCompatibilityItems(){
$('#hidden-items-Compatibility').toggle(100);
}
Compatibility_div = document.getElementById('hidden-items-Compatibility');
if(searchParams.get("next[198]")!==null){
searchParams_Compatibility = searchParams.get("next[198]").split(",");
for(var i=0;i<Compatibility_div.getElementsByTagName('input').length;i++){
    if(searchParams_Compatibility.includes(Compatibility_div.getElementsByTagName('input')[i].value)){
        Compatibility_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Frequency items
function DisplayFrequencyItems(){
$('#hidden-items-Frequency').toggle(100);
}
Frequency_div = document.getElementById('hidden-items-Frequency');
if(searchParams.get("next[199]")!==null){
searchParams_Frequency = searchParams.get("next[199]").split(",");
for(var i=0;i<Frequency_div.getElementsByTagName('input').length;i++){
    if(searchParams_Frequency.includes(Frequency_div.getElementsByTagName('input')[i].value)){
        Frequency_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_USB_ports items
function DisplayNumber_of_USB_portsItems(){
$('#hidden-items-Number_of_USB_ports').toggle(100);
}
Number_of_USB_ports_div = document.getElementById('hidden-items-Number_of_USB_ports');
if(searchParams.get("next[200]")!==null){
searchParams_Number_of_USB_ports= searchParams.get("next[200]").split(",");
for(var i=0;i<Number_of_USB_ports_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_USB_ports.includes(Number_of_USB_ports_div.getElementsByTagName('input')[i].value)){
        Number_of_USB_ports_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Antennae items
function DisplayAntennaeItems(){
$('#hidden-items-Antennae').toggle(100);
}
Antennae_div = document.getElementById('hidden-items-Antennae');
if(searchParams.get("next[201]")!==null){
searchParams_Antennae = searchParams.get("next[201]").split(",");
for(var i=0;i<Antennae_div.getElementsByTagName('input').length;i++){
    if(searchParams_Antennae.includes(Antennae_div.getElementsByTagName('input')[i].value)){
        Antennae_div.getElementsByTagName('input')[i].checked=true;} } }


// To display GST_invoice items
function DisplayGST_invoiceItems(){
$('#hidden-items-GST_invoice').toggle(100);
}
GST_invoice_div = document.getElementById('hidden-items-GST_invoice');
if(searchParams.get("next[202]")!==null){
searchParams_GST_invoice = searchParams.get("next[202]").split(",");
for(var i=0;i<GST_invoice_div.getElementsByTagName('input').length;i++){
    if(searchParams_GST_invoice.includes(GST_invoice_div.getElementsByTagName('input')[i].value)){
        GST_invoice_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Offers items
function DisplayOffersItems(){
$('#hidden-items-Offers').toggle(100);
}
Offers_div = document.getElementById('hidden-items-Offers');
if(searchParams.get("next[203]")!==null){
searchParams_Offers = searchParams.get("next[203]").split(",");
for(var i=0;i<Offers_div.getElementsByTagName('input').length;i++){
    if(searchParams_Offers.includes(Offers_div.getElementsByTagName('input')[i].value)){
        Offers_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Printer_type items
function DisplayPrinter_typeItems(){
$('#hidden-items-Printer_type').toggle(100);
}
Printer_type_div = document.getElementById('hidden-items-Printer_type');
if(searchParams.get("next[204]")!==null){
searchParams_Printer_type = searchParams.get("next[204]").split(",");
for(var i=0;i<Printer_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Printer_type.includes(Printer_type_div.getElementsByTagName('input')[i].value)){
        Printer_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Scanner_type items
function DisplayScanner_typeItems(){
$('#hidden-items-Scanner_type').toggle(100);
}
Scanner_type_div = document.getElementById('hidden-items-Scanner_type');
if(searchParams.get("next[205]")!==null){
searchParams_Scanner_type = searchParams.get("next[205]").split(",");
for(var i=0;i<Scanner_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Scanner_type.includes(Scanner_type_div.getElementsByTagName('input')[i].value)){
        Scanner_type_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Printer_output items
function DisplayPrinter_outputItems(){
$('#hidden-items-Printer_output').toggle(100);
}
Printer_output_div = document.getElementById('hidden-items-Printer_output');
if(searchParams.get("next[206]")!==null){
searchParams_Printer_output = searchParams.get("next[206]").split(",");
for(var i=0;i<Printer_output_div.getElementsByTagName('input').length;i++){
    if(searchParams_Printer_output.includes(Printer_output_div.getElementsByTagName('input')[i].value)){
        Printer_output_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Refilling_type items
function DisplayRefilling_typeItems(){
$('#hidden-items-Refilling_type').toggle(100);
}
Refilling_type_div = document.getElementById('hidden-items-Refilling_type');
if(searchParams.get("next[207]")!==null){
searchParams_Refilling_type = searchParams.get("next[207]").split(",");
for(var i=0;i<Refilling_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Refilling_type.includes(Refilling_type_div.getElementsByTagName('input')[i].value)){
       Refilling_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Function items
function DisplayFunctionItems(){
$('#hidden-items-Function').toggle(100);
}
Function_div = document.getElementById('hidden-items-Function');
if(searchParams.get("next[208]")!==null){
searchParams_Function= searchParams.get("next[208]").split(",");
for(var i=0;i<Function_div.getElementsByTagName('input').length;i++){
    if(searchParams_Function.includes(Function_div.getElementsByTagName('input')[i].value)){
        Function_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Portable items
function DisplayPortableItems(){
$('#hidden-items-Portable').toggle(100);
}
Portable_div = document.getElementById('hidden-items-Portable');
if(searchParams.get("next[209]")!==null){
searchParams_Portable = searchParams.get("next[209]").split(",");
for(var i=0;i<Portable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Portable.includes(Portable_div.getElementsByTagName('input')[i].value)){
       Portable_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Device_chipset items
function DisplayDevice_chipsetItems(){
$('#hidden-items-Device_chipset').toggle(100);
}
Device_chipset_div = document.getElementById('hidden-items-Device_chipset');
if(searchParams.get("next[210]")!==null){
searchParams_Device_chipset = searchParams.get("next[210]").split(",");
for(var i=0;i<Device_chipset_div.getElementsByTagName('input').length;i++){
    if(searchParams_Device_chipset.includes(Device_chipset_div.getElementsByTagName('input')[i].value)){
        Device_chipset_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Lamp_life items
function DisplayLamp_lifeItems(){
$('#hidden-items-Lamp_life').toggle(100);
}
Lamp_life_div = document.getElementById('hidden-items-Lamp_life');
if(searchParams.get("next[211]")!==null){
searchParams_Lamp_life = searchParams.get("next[211]").split(",");
for(var i=0;i<Lamp_life_div.getElementsByTagName('input').length;i++){
    if(searchParams_Lamp_life.includes(Lamp_life_div.getElementsByTagName('input')[i].value)){
        Lamp_life_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Brightness items
function DisplayBrightnessItems(){
$('#hidden-items-Brightness').toggle(100);
}
Brightness_div = document.getElementById('hidden-items-Brightness');
if(searchParams.get("next[212]")!==null){
searchParams_Brightness = searchParams.get("next[212]").split(",");
for(var i=0;i<Brightness_div.getElementsByTagName('input').length;i++){
    if(searchParams_Brightness.includes(Brightness_div.getElementsByTagName('input')[i].value)){
        Brightness_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Edition items
function DisplayEditionItems(){
$('#hidden-items-Edition').toggle(100);
}
Edition_div = document.getElementById('hidden-items-Edition');
if(searchParams.get("next[213]")!==null){
searchParams_Edition = searchParams.get("next[213]").split(",");
for(var i=0;i<Edition_div.getElementsByTagName('input').length;i++){
    if(searchParams_Edition.includes(Edition_div.getElementsByTagName('input')[i].value)){
        Edition_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Architecture items
function DisplayArchitectureItems(){
$('#hidden-items-Architecture').toggle(100);
}
Architecture_div = document.getElementById('hidden-items-Architecture');
if(searchParams.get("next[214]")!==null){
searchParams_Architecture = searchParams.get("next[214]").split(",");
for(var i=0;i<Architecture_div.getElementsByTagName('input').length;i++){
    if(searchParams_Architecture.includes(Architecture_div.getElementsByTagName('input')[i].value)){
        Architecture_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Board items
function DisplayBoardItems(){
$('#hidden-items-Board').toggle(100);
}
Board_div = document.getElementById('hidden-items-Board');
if(searchParams.get("next[215]")!==null){
searchParams_Board = searchParams.get("next[215]").split(",");
for(var i=0;i<Board_div.getElementsByTagName('input').length;i++){
    if(searchParams_Board.includes(Board_div.getElementsByTagName('input')[i].value)){
        Board_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Class items
function DisplayClassItems(){
$('#hidden-items-Class').toggle(100);
}
Class_div = document.getElementById('hidden-items-Class');
if(searchParams.get("next[216]")!==null){
searchParams_Class = searchParams.get("next[216]").split(",");
for(var i=0;i<Class_div.getElementsByTagName('input').length;i++){
    if(searchParams_Class.includes(Class_div.getElementsByTagName('input')[i].value)){
        Class_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Subject items
function DisplaySubjectItems(){
$('#hidden-items-Subject').toggle(100);
}
Subject_div = document.getElementById('hidden-items-Subject');
if(searchParams.get("next[217]")!==null){
searchParams_Subject = searchParams.get("next[217]").split(",");
for(var i=0;i<Subject_div.getElementsByTagName('input').length;i++){
    if(searchParams_Subject.includes(Subject_div.getElementsByTagName('input')[i].value)){
        Subject_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Validity items
function DisplayValidityItems(){
$('#hidden-items-Validity').toggle(100);
}
Validity_div = document.getElementById('hidden-items-Validity');
if(searchParams.get("next[218]")!==null){
searchParams_Validity = searchParams.get("next[218]").split(",");
for(var i=0;i<Validity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Validity.includes(Validity_div.getElementsByTagName('input')[i].value)){
        Validity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Screen_resolution items
function DisplayScreen_resolutionItems(){
$('#hidden-items-Screen_resolution').toggle(100);
}
Screen_resolution_div = document.getElementById('hidden-items-Screen_resolution');
if(searchParams.get("next[219]")!==null){
searchParams_Screen_resolution = searchParams.get("next[219]").split(",");
for(var i=0;i<Screen_resolution_div.getElementsByTagName('input').length;i++){
    if(searchParams_Screen_resolution.includes(Screen_resolution_div.getElementsByTagName('input')[i].value)){
       Screen_resolution_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Screen_form_factor items
function DisplayScreen_form_factorItems(){
$('#hidden-items-Screen_form_factor').toggle(100);
}
Screen_form_factor_div = document.getElementById('hidden-items-Screen_form_factor');
if(searchParams.get("next[220]")!==null){
searchParams_Screen_form_factor = searchParams.get("next[220]").split(",");
for(var i=0;i<Screen_form_factor_div.getElementsByTagName('input').length;i++){
    if(searchParams_Screen_form_factor.includes(Screen_form_factor_div.getElementsByTagName('input')[i].value)){
        Screen_form_factor_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Inbuilt_speaker items
function DisplayInbuilt_speakerItems(){
$('#hidden-items-Inbuilt_speaker').toggle(100);
}
Inbuilt_speaker_div = document.getElementById('hidden-items-Inbuilt_speaker');
if(searchParams.get("next[221]")!==null){
searchParams_Inbuilt_speaker = searchParams.get("next[221]").split(",");
for(var i=0;i<Inbuilt_speaker_div.getElementsByTagName('input').length;i++){
    if(searchParams_Inbuilt_speaker.includes(Inbuilt_speaker_div.getElementsByTagName('input')[i].value)){
       Inbuilt_speaker_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Panel_type items
function DisplayPanel_typeItems(){
$('#hidden-items-Panel_type').toggle(100);
}
Panel_type_div = document.getElementById('hidden-items-Panel_type');
if(searchParams.get("next[222]")!==null){
searchParams_Panel_type = searchParams.get("next[222]").split(",");
for(var i=0;i<Panel_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Panel_type.includes(Panel_type_div.getElementsByTagName('input')[i].value)){
        Panel_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Connectivity items
function DisplayConnectivityItems(){
$('#hidden-items-Connectivity').toggle(100);
}
Connectivity_div = document.getElementById('hidden-items-Connectivity');
if(searchParams.get("next[223]")!==null){
searchParams_Connectivity = searchParams.get("next[223]").split(",");
for(var i=0;i<Connectivity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Connectivity.includes(Connectivity_div.getElementsByTagName('input')[i].value)){
        Connectivity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Response_time items
function DisplayResponse_timeItems(){
$('#hidden-items-Response_time').toggle(100);
}
Response_time_div = document.getElementById('hidden-items-Response_time');
if(searchParams.get("next[224]")!==null){
searchParams_Response_time = searchParams.get("next[224]").split(",");
for(var i=0;i<Response_time_div.getElementsByTagName('input').length;i++){
    if(searchParams_Response_time.includes(Response_time_div.getElementsByTagName('input')[i].value)){
        Response_time_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Fan_diameter items
function DisplayFan_diameterItems(){
$('#hidden-items-Fan_diameter').toggle(100);
}
Fan_diameter_div = document.getElementById('hidden-items-Fan_diameter');
if(searchParams.get("next[225]")!==null){
searchParams_Fan_diameter = searchParams.get("next[225]").split(",");
for(var i=0;i<Fan_diameter_div.getElementsByTagName('input').length;i++){
    if(searchParams_Fan_diameter.includes(Fan_diameter_div.getElementsByTagName('input')[i].value)){
        Fan_diameter_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Max_fan_speed items
function DisplayMax_fan_speedItems(){
$('#hidden-items-Max_fan_speed').toggle(100);
}
Max_fan_speed_div = document.getElementById('hidden-items-Max_fan_speed');
if(searchParams.get("next[226]")!==null){
searchParams_Max_fan_speed= searchParams.get("next[226]").split(",");
for(var i=0;i<Max_fan_speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Max_fan_speed.includes(Max_fan_speed_div.getElementsByTagName('input')[i].value)){
        Max_fan_speed_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_satacables items
function DisplayNumber_of_satacablesItems(){
$('#hidden-items-Number_of_satacables').toggle(100);
}
Number_of_satacables_div = document.getElementById('hidden-items-Number_of_satacables');
if(searchParams.get("next[227]")!==null){
searchParams_Number_of_satacables= searchParams.get("next[227]").split(",");
for(var i=0;i<Number_of_satacables_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_satacables.includes(Number_of_satacables_div.getElementsByTagName('input')[i].value)){
       Number_of_satacables_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Power_output items
function DisplayPower_outputItems(){
$('#hidden-items-Power_output').toggle(100);
}
Power_output_div = document.getElementById('hidden-items-Power_output');
if(searchParams.get("next[228]")!==null){
searchParams_Power_output = searchParams.get("next[228]").split(",");
for(var i=0;i<Power_output_div.getElementsByTagName('input').length;i++){
    if(searchParams_Power_output.includes(Power_output_div.getElementsByTagName('input')[i].value)){
        Power_output_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_cores items
function DisplayNumber_of_coresItems(){
$('#hidden-items-Number_of_cores').toggle(100);
}
Number_of_cores_div = document.getElementById('hidden-items-Number_of_cores');
if(searchParams.get("next[229]")!==null){
searchParams_Number_of_cores = searchParams.get("next[229]").split(",");
for(var i=0;i<Number_of_cores_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_cores.includes(Number_of_cores_div.getElementsByTagName('input')[i].value)){
        Number_of_cores_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Processor_speed items
function DisplayProcessor_speedItems(){
$('#hidden-items-Processor_speed').toggle(100);
}
Processor_speed_div = document.getElementById('hidden-items-Processor_speed');
if(searchParams.get("next[230]")!==null){
searchParams_Processor_speed = searchParams.get("next[230]").split(",");
for(var i=0;i<Processor_speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Processor_speed.includes(Processor_speed_div.getElementsByTagName('input')[i].value)){
        Processor_speed_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Data_rate items
function DisplayData_rateItems(){
$('#hidden-items-Data_rate').toggle(100);
}
Data_rate_div = document.getElementById('hidden-items-Data_rate');
if(searchParams.get("next[231]")!==null){
searchParams_Data_rate = searchParams.get("next[231]").split(",");
for(var i=0;i<Data_rate_div.getElementsByTagName('input').length;i++){
    if(searchParams_Data_rate.includes(Data_rate_div.getElementsByTagName('input')[i].value)){
        Data_rate_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Device items
function DisplayDeviceItems(){
$('#hidden-items-Device').toggle(100);
}
Device_div = document.getElementById('hidden-items-Device');
if(searchParams.get("next[232]")!==null){
searchParams_Device = searchParams.get("next[232]").split(",");
for(var i=0;i<Device_div.getElementsByTagName('input').length;i++){
    if(searchParams_Device.includes(Device_div.getElementsByTagName('input')[i].value)){
        Device_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Chipset items
function DisplayChipsetItems(){
$('#hidden-items-Chipset').toggle(100);
}
Chipset_div = document.getElementById('hidden-items-Chipset');
if(searchParams.get("next[233]")!==null){
searchParams_Chipset = searchParams.get("next[233]").split(",");
for(var i=0;i<Chipset_div.getElementsByTagName('input').length;i++){
    if(searchParams_Chipset.includes(Chipset_div.getElementsByTagName('input')[i].value)){
        Chipset_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Clock_speed items
function DisplayClock_speedItems(){
$('#hidden-items-Clock_speed').toggle(100);
}
Clock_speed_div = document.getElementById('hidden-items-Clock_speed');
if(searchParams.get("next[234]")!==null){
searchParams_Clock_speed = searchParams.get("next[234]").split(",");
for(var i=0;i<Clock_speed_div.getElementsByTagName('input').length;i++){
    if(searchParams_Clock_speed.includes(Clock_speed_div.getElementsByTagName('input')[i].value)){
        Clock_speed_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_HDMI_ports items
function DisplayNumber_of_HDMI_portsItems(){
$('#hidden-items-Number_of_HDMI_ports').toggle(100);
}
Number_of_HDMI_ports_div = document.getElementById('hidden-items-Number_of_HDMI_ports');
if(searchParams.get("next[235]")!==null){
searchParams_Number_of_HDMI_ports = searchParams.get("next[235]").split(",");
for(var i=0;i<Number_of_HDMI_ports_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_HDMI_ports.includes(Number_of_HDMI_ports_div.getElementsByTagName('input')[i].value)){
        Number_of_HDMI_ports_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Configuration items
function DisplayConfigurationItems(){
$('#hidden-items-Configuration').toggle(100);
}
Configuration_div = document.getElementById('hidden-items-Configuration');
if(searchParams.get("next[236]")!==null){
searchParams_Configuration = searchParams.get("next[236]").split(",");
for(var i=0;i<Configuration_div.getElementsByTagName('input').length;i++){
    if(searchParams_Configuration.includes(Configuration_div.getElementsByTagName('input')[i].value)){
        Configuration_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Smart_tv items
function DisplaySmart_tvItems(){
$('#hidden-items-Smart_tv').toggle(100);
}
Smart_tv_div = document.getElementById('hidden-items-Smart_tv');
if(searchParams.get("next[237]")!==null){
searchParams_Smart_tv = searchParams.get("next[237]").split(",");
for(var i=0;i<Smart_tv_div.getElementsByTagName('input').length;i++){
    if(searchParams_Smart_tv.includes(Smart_tv_div.getElementsByTagName('input')[i].value)){
        Smart_tv_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Screen_type items
function DisplayScreen_typeItems(){
$('#hidden-items-Screen_type').toggle(100);
}
Screen_type_div = document.getElementById('hidden-items-Screen_type');
if(searchParams.get("next[238]")!==null){
searchParams_Screen_type = searchParams.get("next[238]").split(",");
for(var i=0;i<Screen_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Screen_type.includes(Screen_type_div.getElementsByTagName('input')[i].value)){
       Screen_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Curve_tv items
function DisplayCurve_tvItems(){
$('#hidden-items-Curve_tv').toggle(100);
}
Curve_tv_div = document.getElementById('hidden-items-Curve_tv');
if(searchParams.get("next[239]")!==null){
searchParams_Curve_tv = searchParams.get("next[239]").split(",");
for(var i=0;i<Curve_tv_div.getElementsByTagName('input').length;i++){
    if(searchParams_Curve_tv.includes(Curve_tv_div.getElementsByTagName('input')[i].value)){
        Curve_tv_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Internal_storage items
function DisplayInternal_storageItems(){
$('#hidden-items-Internal_storage').toggle(100);
}
Internal_storage_div = document.getElementById('hidden-items-Internal_storage');
if(searchParams.get("next[240]")!==null){
searchParams_Internal_storage = searchParams.get("next[240]").split(",");
for(var i=0;i<Internal_storage_div.getElementsByTagName('input').length;i++){
    if(searchParams_Internal_storage.includes(Internal_storage_div.getElementsByTagName('input')[i].value)){
       Internal_storage_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Battery_capacity items
function DisplayBattery_capacityItems(){
$('#hidden-items-Battery_capacity').toggle(100);
}
Battery_capacity_div = document.getElementById('hidden-items-Battery_capacity');
if(searchParams.get("next[241]")!==null){
searchParams_Battery_capacity = searchParams.get("next[241]").split(",");
for(var i=0;i<Battery_capacity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Battery_capacity.includes(Battery_capacity_div.getElementsByTagName('input')[i].value)){
        Battery_capacity_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Network_type items
function DisplayNetwork_typeItems(){
$('#hidden-items-Network_type').toggle(100);
}
Network_type_div = document.getElementById('hidden-items-Network_type');
if(searchParams.get("next[242]")!==null){
searchParams_Network_type = searchParams.get("next[242]").split(",");
for(var i=0;i<Network_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Network_type.includes(Network_type_div.getElementsByTagName('input')[i].value)){
        Network_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display SIM_type items
function DisplaySIM_typeItems(){
$('#hidden-items-SIM_type').toggle(100);
}
SIM_type_div = document.getElementById('hidden-items-SIM_type');
if(searchParams.get("next[243]")!==null){
searchParams_SIM_type = searchParams.get("next[243]").split(",");
for(var i=0;i<SIM_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_SIM_type.includes(SIM_type_div.getElementsByTagName('input')[i].value)){
        SIM_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Primary_camera items
function DisplayPrimary_cameraItems(){
$('#hidden-items-Primary_camera').toggle(100);
}
Primary_camera_div = document.getElementById('hidden-items-Primary_camera');
if(searchParams.get("next[244]")!==null){
searchParams_Primary_camera = searchParams.get("next[244]").split(",");
for(var i=0;i<Primary_camera_div.getElementsByTagName('input').length;i++){
    if(searchParams_Primary_camera.includes(Primary_camera_div.getElementsByTagName('input')[i].value)){
        Primary_camera_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Secondary_camera items
function DisplaySecondary_cameraItems(){
$('#hidden-items-Secondary_camera').toggle(100);
}
Secondary_camera_div = document.getElementById('hidden-items-Secondary_camera');
if(searchParams.get("next[245]")!==null){
searchParams_Secondary_camera = searchParams.get("next[245]").split(",");
for(var i=0;i<Secondary_camera_div.getElementsByTagName('input').length;i++){
    if(searchParams_Secondary_camera.includes(Secondary_camera_div.getElementsByTagName('input')[i].value)){
        Secondary_camera_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Operating_system_name items
function DisplayOperating_system_nameItems(){
$('#hidden-items-Operating_system_name').toggle(100);
}
Operating_system_name_div = document.getElementById('hidden-items-Operating_system_name');
if(searchParams.get("next[246]")!==null){
searchParams_Operating_system_name = searchParams.get("next[246]").split(",");
for(var i=0;i<Operating_system_name_div.getElementsByTagName('input').length;i++){
    if(searchParams_Operating_system_name.includes(Operating_system_name_div.getElementsByTagName('input')[i].value)){
        Operating_system_name_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Speciality items
function DisplaySpecialityItems(){
$('#hidden-items-Speciality').toggle(100);
}
Speciality_div = document.getElementById('hidden-items-Speciality');
if(searchParams.get("next[247]")!==null){
searchParams_Speciality = searchParams.get("next[247]").split(",");
for(var i=0;i<Speciality_div.getElementsByTagName('input').length;i++){
    if(searchParams_Speciality.includes(Speciality_div.getElementsByTagName('input')[i].value)){
        Speciality_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Voice_calling items
function DisplayVoice_callingItems(){
$('#hidden-items-Voice_calling').toggle(100);
}
Voice_calling_div = document.getElementById('hidden-items-Voice_calling');
if(searchParams.get("next[248]")!==null){
searchParams_Voice_calling = searchParams.get("next[248]").split(",");
for(var i=0;i<Voice_calling_div.getElementsByTagName('input').length;i++){
    if(searchParams_Voice_calling.includes(Voice_calling_div.getElementsByTagName('input')[i].value)){
        Voice_calling_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Battery_type items
function DisplayBattery_typeItems(){
$('#hidden-items-Battery_type').toggle(100);
}
Battery_type_div = document.getElementById('hidden-items-Battery_type');
if(searchParams.get("next[249]")!==null){
searchParams_Battery_type = searchParams.get("next[249]").split(",");
for(var i=0;i<Battery_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Battery_type.includes(Battery_type_div.getElementsByTagName('input')[i].value)){
        Battery_type_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Syncing_method items
function DisplaySyncing_methodItems(){
$('#hidden-items-Syncing_method').toggle(100);
}
Syncing_method_div = document.getElementById('hidden-items-Syncing_method');
if(searchParams.get("next[250]")!==null){
searchParams_Syncing_method = searchParams.get("next[250]").split(",");
for(var i=0;i<Syncing_method_div.getElementsByTagName('input').length;i++){
    if(searchParams_Syncing_method.includes(Syncing_method_div.getElementsByTagName('input')[i].value)){
        Syncing_method_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Wireless_standard items
function DisplayWireless_standardItems(){
$('#hidden-items-Wireless_standard').toggle(100);
}
Wireless_standard_div = document.getElementById('hidden-items-Wireless_standard');
if(searchParams.get("next[251]")!==null){
searchParams_Wireless_standard = searchParams.get("next[251]").split(",");
for(var i=0;i<Wireless_standard_div.getElementsByTagName('input').length;i++){
    if(searchParams_Wireless_standard.includes(Wireless_standard_div.getElementsByTagName('input')[i].value)){
        Wireless_standard_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Indicator items
function DisplayIndicatorItems(){
$('#hidden-items-Indicator').toggle(100);
}
Indicator_div = document.getElementById('hidden-items-Indicator');
if(searchParams.get("next[252]")!==null){
searchParams_Indicator = searchParams.get("next[252]").split(",");
for(var i=0;i<Indicator_div.getElementsByTagName('input').length;i++){
    if(searchParams_Indicator.includes(Indicator_div.getElementsByTagName('input')[i].value)){
        Indicator_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Compatible_mobile items
function DisplayCompatible_mobileItems(){
$('#hidden-items-Compatible_mobile').toggle(100);
}
Compatible_mobile_div = document.getElementById('hidden-items-Compatible_mobile');
if(searchParams.get("next[253]")!==null){
searchParams_Compatible_mobile = searchParams.get("next[253]").split(",");
for(var i=0;i<Compatible_mobile_div.getElementsByTagName('input').length;i++){
    if(searchParams_Compatible_mobile.includes(Compatible_mobile_div.getElementsByTagName('input')[i].value)){
        Compatible_mobile_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Extension items
function DisplayExtensionItems(){
$('#hidden-items-Extension').toggle(100);
}
Extension_div = document.getElementById('hidden-items-Extension');
if(searchParams.get("next[254]")!==null){
searchParams_Extension = searchParams.get("next[254]").split(",");
for(var i=0;i<Extension_div.getElementsByTagName('input').length;i++){
    if(searchParams_Extension.includes(Extension_div.getElementsByTagName('input')[i].value)){
        Extension_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Movement items
function DisplayMovementItems(){
$('#hidden-items-Movement').toggle(100);
}
Movement_div = document.getElementById('hidden-items-Movement');
if(searchParams.get("next[255]")!==null){
searchParams_Movement = searchParams.get("next[255]").split(",");
for(var i=0;i<Movement_div.getElementsByTagName('input').length;i++){
    if(searchParams_Movement.includes(Movement_div.getElementsByTagName('input')[i].value)){
        Movement_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Fixture_type items
function DisplayFixture_typeItems(){
$('#hidden-items-Fixture_type').toggle(100);
}
Fixture_type_div = document.getElementById('hidden-items-Fixture_type');
if(searchParams.get("next[256]")!==null){
searchParams_Fixture_type = searchParams.get("next[256]").split(",");
for(var i=0;i<Fixture_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Fixture_type.includes(Fixture_type_div.getElementsByTagName('input')[i].value)){
        Fixture_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Installation_type items
function DisplayInstallation_typeItems(){
$('#hidden-items-Installation_type').toggle(100);
}
Installation_type_div = document.getElementById('hidden-items-Installation_type');
if(searchParams.get("next[257]")!==null){
searchParams_Installation_type = searchParams.get("next[257]").split(",");
for(var i=0;i<Installation_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Installation_type.includes(Installation_type_div.getElementsByTagName('input')[i].value)){
        Installation_type_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Sweep_diameter items
function DisplaySweep_diameterItems(){
$('#hidden-items-Sweep_diameter').toggle(100);
}
Sweep_diameter_div = document.getElementById('hidden-items-Sweep_diameter');
if(searchParams.get("next[258]")!==null){
searchParams_Sweep_diameter = searchParams.get("next[258]").split(",");
for(var i=0;i<Sweep_diameter_div.getElementsByTagName('input').length;i++){
    if(searchParams_Sweep_diameter.includes(Sweep_diameter_div.getElementsByTagName('input')[i].value)){
        Sweep_diameter_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Phase items
function DisplayPhaseItems(){
$('#hidden-items-Phase').toggle(100);
}
Phase_div = document.getElementById('hidden-items-Phase');
if(searchParams.get("next[259]")!==null){
searchParams_Phase = searchParams.get("next[259]").split(",");
for(var i=0;i<Phase_div.getElementsByTagName('input').length;i++){
    if(searchParams_Phase.includes(Phase_div.getElementsByTagName('input')[i].value)){
        Phase_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_poles items
function DisplayNumber_of_polesItems(){
$('#hidden-items-Number_of_poles').toggle(100);
}
Number_of_poles_div = document.getElementById('hidden-items-Number_of_poles');
if(searchParams.get("next[260]")!==null){
searchParams_Number_of_poles = searchParams.get("next[260]").split(",");
for(var i=0;i<Number_of_poles_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_poles.includes(Number_of_poles_div.getElementsByTagName('input')[i].value)){
        Number_of_poles_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Flammable items
function DisplayFlammableItems(){
$('#hidden-items-Flammable').toggle(100);
}
Flammable_div = document.getElementById('hidden-items-Flammable');
if(searchParams.get("next[261]")!==null){
searchParams_Flammable = searchParams.get("next[261]").split(",");
for(var i=0;i<Flammable_div.getElementsByTagName('input').length;i++){
    if(searchParams_Flammable.includes(Flammable_div.getElementsByTagName('input')[i].value)){
        Flammable_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Sensor_type items
function DisplaySensor_typeItems(){
$('#hidden-items-Sensor_type').toggle(100);
}
Sensor_type_div = document.getElementById('hidden-items-Sensor_type');
if(searchParams.get("next[262]")!==null){
searchParams_Sensor_type = searchParams.get("next[262]").split(",");
for(var i=0;i<Sensor_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Sensor_type.includes(Sensor_type_div.getElementsByTagName('input')[i].value)){
        Sensor_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Effective_pixels items
function DisplayEffective_pixelsItems(){
$('#hidden-items-Effective_pixels').toggle(100);
}
Effective_pixels_div = document.getElementById('hidden-items-Effective_pixels');
if(searchParams.get("next[263]")!==null){
searchParams_Effective_pixels = searchParams.get("next[263]").split(",");
for(var i=0;i<Effective_pixels_div.getElementsByTagName('input').length;i++){
    if(searchParams_Effective_pixels.includes(Effective_pixels_div.getElementsByTagName('input')[i].value)){
       Effective_pixels_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Maximum_load_capacity items
function DisplayMaximum_load_capacityItems(){
$('#hidden-items-Maximum_load_capacity').toggle(100);
}
Maximum_load_capacity_div = document.getElementById('hidden-items-Maximum_load_capacity');
if(searchParams.get("next[264]")!==null){
searchParams_Maximum_load_capacity = searchParams.get("next[264]").split(",");
for(var i=0;i<Maximum_load_capacity_div.getElementsByTagName('input').length;i++){
    if(searchParams_Maximum_load_capacity.includes(Maximum_load_capacity_div.getElementsByTagName('input')[i].value)){
       Maximum_load_capacity_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Prime_Zoom items
function DisplayPrime_ZoomItems(){
$('#hidden-items-Prime_Zoom').toggle(100);
}
Prime_Zoom_div = document.getElementById('hidden-items-Prime_Zoom');
if(searchParams.get("next[265]")!==null){
searchParams_Prime_Zoom = searchParams.get("next[265]").split(",");
for(var i=0;i<Prime_Zoom_div.getElementsByTagName('input').length;i++){
    if(searchParams_Prime_Zoom.includes(Prime_Zoom_div.getElementsByTagName('input')[i].value)){
        Prime_Zoom_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Focal_length items
function DisplayFocal_lengthItems(){
$('#hidden-items-Focal_length').toggle(100);
}
Focal_length_div = document.getElementById('hidden-items-Focal_length');
if(searchParams.get("next[266]")!==null){
searchParams_Focal_length = searchParams.get("next[266]").split(",");
for(var i=0;i<Focal_length_div.getElementsByTagName('input').length;i++){
    if(searchParams_Focal_length.includes(Focal_length_div.getElementsByTagName('input')[i].value)){
        Focal_length_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Lens_type items
function DisplayLens_typeItems(){
$('#hidden-items-Lens_type').toggle(100);
}
Lens_type_div = document.getElementById('hidden-items-Lens_type');
if(searchParams.get("next[267]")!==null){
searchParams_Lens_type = searchParams.get("next[267]").split(",");
for(var i=0;i<Lens_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Lens_type.includes(Lens_type_div.getElementsByTagName('input')[i].value)){
       Lens_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Max_aperture items
function DisplayMax_apertureItems(){
$('#hidden-items-Max_aperture').toggle(100);
}
Max_aperture_div = document.getElementById('hidden-items-Max_aperture');
if(searchParams.get("next[268]")!==null){
searchParams_Max_aperture = searchParams.get("next[268]").split(",");
for(var i=0;i<Max_aperture_div.getElementsByTagName('input').length;i++){
    if(searchParams_Max_aperture.includes(Max_aperture_div.getElementsByTagName('input')[i].value)){
        Max_aperture_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Lens_mount items
function DisplayLens_mountItems(){
$('#hidden-items-Lens_mount').toggle(100);
}
Lens_mount_div = document.getElementById('hidden-items-Lens_mount');
if(searchParams.get("next[269]")!==null){
searchParams_Lens_mount = searchParams.get("next[269]").split(",");
for(var i=0;i<Lens_mount_div.getElementsByTagName('input').length;i++){
    if(searchParams_Lens_mount.includes(Lens_mount_div.getElementsByTagName('input')[i].value)){
        Lens_mount_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Max_magnification items
function DisplayMax_magnificationItems(){
$('#hidden-items-Max_magnification').toggle(100);
}
Max_magnification_div = document.getElementById('hidden-items-Max_magnification');
if(searchParams.get("next[270]")!==null){
searchParams_Max_magnification = searchParams.get("next[270]").split(",");
for(var i=0;i<Max_magnification_div.getElementsByTagName('input').length;i++){
    if(searchParams_Max_magnification.includes(Max_magnification_div.getElementsByTagName('input')[i].value)){
        Max_magnification_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Mount_tracking items
function DisplayMount_trackingItems(){
$('#hidden-items-Mount_tracking').toggle(100);
}
Mount_tracking_div = document.getElementById('hidden-items-Mount_tracking');
if(searchParams.get("next[271]")!==null){
searchParams_Mount_tracking = searchParams.get("next[271]").split(",");
for(var i=0;i<Mount_tracking_div.getElementsByTagName('input').length;i++){
    if(searchParams_Mount_tracking.includes(Mount_tracking_div.getElementsByTagName('input')[i].value)){
        Mount_tracking_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Placement_type items
function DisplayPlacement_typeItems(){
$('#hidden-items-Placement_type').toggle(100);
}
Placement_type_div = document.getElementById('hidden-items-Placement_type');
if(searchParams.get("next[272]")!==null){
searchParams_Placement_type = searchParams.get("next[272]").split(",");
for(var i=0;i<Placement_type_div.getElementsByTagName('input').length;i++){
    if(searchParams_Placement_type.includes(Placement_type_div.getElementsByTagName('input')[i].value)){
        Placement_type_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Male_thread_diameter items
function DisplayMale_thread_diameterItems(){
$('#hidden-items-Male_thread_diameter').toggle(100);
}
Male_thread_diameter_div = document.getElementById('hidden-items-Male_thread_diameter');
if(searchParams.get("next[273]")!==null){
searchParams_Male_thread_diameter = searchParams.get("next[273]").split(",");
for(var i=0;i<Male_thread_diameter_div.getElementsByTagName('input').length;i++){
    if(searchParams_Male_thread_diameter.includes(Male_thread_diameter_div.getElementsByTagName('input')[i].value)){
        Male_thread_diameter_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Female_thread_diameter items
function DisplayFemale_thread_diameterItems(){
$('#hidden-items-Female_thread_diameter').toggle(100);
}
Female_thread_diameter_div = document.getElementById('hidden-items-Female_thread_diameter');
if(searchParams.get("next[274]")!==null){
searchParams_Female_thread_diameter = searchParams.get("next[274]").split(",");
for(var i=0;i<Female_thread_diameter_div.getElementsByTagName('input').length;i++){
    if(searchParams_Female_thread_diameter.includes(Female_thread_diameter_div.getElementsByTagName('input')[i].value)){
        Female_thread_diameter_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Vehicle_brand items
function DisplayVehicle_brandItems(){
$('#hidden-items-Vehicle_brand').toggle(100);
}
Vehicle_brand_div = document.getElementById('hidden-items-Vehicle_brand');
if(searchParams.get("next[275]")!==null){
searchParams_Vehicle_brand = searchParams.get("next[275]").split(",");
for(var i=0;i<Vehicle_brand_div.getElementsByTagName('input').length;i++){
    if(searchParams_Vehicle_brand.includes(Vehicle_brand_div.getElementsByTagName('input')[i].value)){
       Vehicle_brand_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Vehicle_model items
function DisplayVehicle_modelItems(){
$('#hidden-items-Vehicle_model').toggle(100);
}
Vehicle_model_div = document.getElementById('hidden-items-Vehicle_model');
if(searchParams.get("next[276]")!==null){
searchParams_Vehicle_model = searchParams.get("next[276]").split(",");
for(var i=0;i<Vehicle_model_div.getElementsByTagName('input').length;i++){
    if(searchParams_Vehicle_model.includes(Vehicle_model_div.getElementsByTagName('input')[i].value)){
        Vehicle_model_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Number_of_indicator_lamps items
function DisplayNumber_of_indicator_lampsItems(){
$('#hidden-items-Number_of_indicator_lamps').toggle(100);
}
Number_of_indicator_lamps_div = document.getElementById('hidden-items-Number_of_indicator_lamps');
if(searchParams.get("next[277]")!==null){
searchParams_Number_of_indicator_lamps = searchParams.get("next[277]").split(",");
for(var i=0;i<Number_of_indicator_lamps_div.getElementsByTagName('input').length;i++){
    if(searchParams_Number_of_indicator_lamps.includes(Number_of_indicator_lamps_div.getElementsByTagName('input')[i].value)){
        Number_of_indicator_lamps_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Tachometer items
function DisplayTachometerItems(){
$('#hidden-items-Tachometer').toggle(100);
}
Tachometer_div = document.getElementById('hidden-items-Tachometer');
if(searchParams.get("next[278]")!==null){
searchParams_Tachometer = searchParams.get("next[278]").split(",");
for(var i=0;i<Tachometer_div.getElementsByTagName('input').length;i++){
    if(searchParams_Tachometer.includes(Tachometer_div.getElementsByTagName('input')[i].value)){
        Tachometer_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Armours items
function DisplayArmoursItems(){
$('#hidden-items-Armours').toggle(100);
}
Armours_div = document.getElementById('hidden-items-Armours');
if(searchParams.get("next[279]")!==null){
searchParams_Armours = searchParams.get("next[279]").split(",");
for(var i=0;i<Armours_div.getElementsByTagName('input').length;i++){
    if(searchParams_Armours.includes(Armours_div.getElementsByTagName('input')[i].value)){
        Armours_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Platform items
function DisplayPlatformItems(){
$('#hidden-items-Platform').toggle(100);
}
Platform_div = document.getElementById('hidden-items-Platform');
if(searchParams.get("next[280]")!==null){
searchParams_Platform= searchParams.get("next[280]").split(",");
for(var i=0;i<Platform_div.getElementsByTagName('input').length;i++){
    if(searchParams_Platform.includes(Platform_div.getElementsByTagName('input')[i].value)){
        Platform_div.getElementsByTagName('input')[i].checked=true;} } }

// To display PEGI_rating items
function DisplayPEGI_ratingItems(){
$('#hidden-items-PEGI_rating').toggle(100);
}
PEGI_rating_div = document.getElementById('hidden-items-PEGI_rating');
if(searchParams.get("next[281]")!==null){
searchParams_PEGI_rating = searchParams.get("next[281]").split(",");
for(var i=0;i<PEGI_rating_div.getElementsByTagName('input').length;i++){
    if(searchParams_PEGI_rating.includes(PEGI_rating_div.getElementsByTagName('input')[i].value)){
        PEGI_rating_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Game_modes items
function DisplayGame_modesItems(){
$('#hidden-items-Game_modes').toggle(100);
}
Game_modes_div = document.getElementById('hidden-items-Game_modes');
if(searchParams.get("next[282]")!==null){
searchParams_Game_modes= searchParams.get("next[282]").split(",");
for(var i=0;i<Game_modes_div.getElementsByTagName('input').length;i++){
    if(searchParams_Game_modes.includes(Game_modes_div.getElementsByTagName('input')[i].value)){
        Game_modes_div.getElementsByTagName('input')[i].checked=true;} } }

// To display ESRB_rating items
function DisplayESRB_ratingItems(){
$('#hidden-items-ESRB_rating').toggle(100);
}
ESRB_rating_div = document.getElementById('hidden-items-ESRB_rating');
if(searchParams.get("next[283]")!==null){
searchParams_ESRB_rating= searchParams.get("next[283]").split(",");
for(var i=0;i<ESRB_rating_div.getElementsByTagName('input').length;i++){
    if(searchParams_ESRB_rating.includes(ESRB_rating_div.getElementsByTagName('input')[i].value)){
        ESRB_rating_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Temple_material items
function DisplayTemple_materialItems(){
$('#hidden-items-Temple_material').toggle(100);
}
Temple_material_div = document.getElementById('hidden-items-Temple_material');
if(searchParams.get("next[284]")!==null){
searchParams_Temple_material = searchParams.get("next[284]").split(",");
for(var i=0;i<Temple_material_div.getElementsByTagName('input').length;i++){
    if(searchParams_Temple_material.includes(Temple_material_div.getElementsByTagName('input')[i].value)){
        Temple_material_div.getElementsByTagName('input')[i].checked=true;} } }

// To display Lens_type_supported items
function DisplayLens_type_supportedItems(){
$('#hidden-items-Lens_type_supported').toggle(100);
}
Lens_type_supported_div = document.getElementById('hidden-items-Lens_type_supported');
if(searchParams.get("next[285]")!==null){
searchParams_Lens_type_supported = searchParams.get("next[285]").split(",");
for(var i=0;i<Lens_type_supported_div.getElementsByTagName('input').length;i++){
    if(searchParams_Lens_type_supported.includes(Lens_type_supported_div.getElementsByTagName('input')[i].value)){
        Lens_type_supported_div.getElementsByTagName('input')[i].checked=true;} } }


// To display Temple_color items
function DisplayTemple_colorItems(){
$('#hidden-items-Temple_color').toggle(100);
}
Temple_color_div = document.getElementById('hidden-items-Temple_color');
if(searchParams.get("next[286]")!==null){
searchParams_Temple_color = searchParams.get("next[286]").split(",");
for(var i=0;i<Temple_color_div.getElementsByTagName('input').length;i++){
    if(searchParams_Temple_color.includes(Temple_color_div.getElementsByTagName('input')[i].value)){
       Temple_color_div.getElementsByTagName('input')[i].checked=true;} } }


// Brand
function DisplayBrandItems(){
$('#hidden-items-brand').toggle(100);
}
Brand_div = document.getElementById('BRAND');
if(searchParams.get("next[2]")!==null){
searchParams_brand = searchParams.get("next[2]").split(",");
for(var i=0;i<Brand_div.getElementsByTagName('input').length;i++){
    if(searchParams_brand.includes(Brand_div.getElementsByTagName('input')[i].value)){
        Brand_div.getElementsByTagName('input')[i].checked=true;
    } } }

// Price
LowerPrice = document.getElementById('LowerPrice');
UpperPrice = document.getElementById('UpperPrice');
if(searchParams.get("next[3]")!==null){
searchParams_Price=searchParams.get("next[3]").split(",");
LowerPrice.value = searchParams_Price[0];
UpperPrice.value = searchParams_Price[1];

}

// Colors
function DisplayColorItems(){
$('#hidden-items-color').toggle(100);
}
colors_div = document.getElementById('Colors');
if(searchParams.get("next[4]")!==null){
searchParams_colors = searchParams.get("next[4]").split(",");
for(var k=0;k<colors_div.getElementsByTagName('input').length;k++){
    if(searchParams_colors.includes(colors_div.getElementsByTagName('input')[k].value)){
        colors_div.getElementsByTagName('input')[k].checked=true;
    }}}

// Ratings
ratings = document.getElementsByName('Ratings');
searchParams_ratings=searchParams.get("next[5]");
for(var k=0;k<ratings.length;k++){
    if(searchParams_ratings === ratings[k].value){
        ratings[k].checked=true;
    }  }


function ApplyFilter(){

    Price_Array=[];

    //Brand Loop
    Brand_Array=[];

    if(Brand_div!==null){
    for(var i=0;i<Brand_div.getElementsByTagName('input').length;i++){
        if(Brand_div.getElementsByTagName('input')[i].checked){
        Brand_Array.push(Brand_div.getElementsByTagName('input')[i].value);}
        }}
    // Color Loop
    Color_Array=[];
    if(colors_div!==null){
    for(var k=0;k<colors_div.getElementsByTagName('input').length;k++){
        if(colors_div.getElementsByTagName('input')[k].checked){
        Color_Array.push(colors_div.getElementsByTagName('input')[k].value);}
        }}
    // Fit Loop
    Fit_Array=[];
     if(Fit_div!==null){
     for(var k=0;k<Fit_div.getElementsByTagName('input').length;k++){
        if(Fit_div.getElementsByTagName('input')[k].checked){
        Fit_Array.push(Fit_div.getElementsByTagName('input')[k].value);}
        }}
     // Pattern Loop
     Pattern_Array=[];
     if(Pattern_div!==null){
     for(var k=0;k<Pattern_div.getElementsByTagName('input').length;k++){
        if(Pattern_div.getElementsByTagName('input')[k].checked){
        Pattern_Array.push(Pattern_div.getElementsByTagName('input')[k].value);}
        }}
     // Neck_type Loop
     Neck_type_Array=[];
     if(Neck_type_div!==null){
     for(var k=0;k<Neck_type_div.getElementsByTagName('input').length;k++){
        if(Neck_type_div.getElementsByTagName('input')[k].checked){
        Neck_type_Array.push(Neck_type_div.getElementsByTagName('input')[k].value);}
        }}
    // Sleeve_type Loop
    Sleeve_type_Array=[];
    if(Sleeve_type_div!==null){
    for(var k=0;k<Sleeve_type_div.getElementsByTagName('input').length;k++){
        if(Sleeve_type_div.getElementsByTagName('input')[k].checked){
        Sleeve_type_Array.push(Sleeve_type_div.getElementsByTagName('input')[k].value);}
        }}
    // Theme Loop
    Theme_Array=[];
    if(Theme_div!==null){
     for(var k=0;k<Theme_div.getElementsByTagName('input').length;k++){
        if(Theme_div.getElementsByTagName('input')[k].checked){
        Theme_Array.push(Theme_div.getElementsByTagName('input')[k].value);}
        }}
     // Fabric Loop

    Fabric_Array = [];
     if(Fabric_div!==null){
     for(var k=0;k<Fabric_div.getElementsByTagName('input').length;k++){
        if(Fabric_div.getElementsByTagName('input')[k].checked){
        Fabric_Array.push(Fabric_div.getElementsByTagName('input')[k].value);}
        }}
     // Occasion Loop
     Occasion_Array=[];
     if(Occasion_div!==null){
     for(var k=0;k<Occasion_div.getElementsByTagName('input').length;k++){
        if(Occasion_div.getElementsByTagName('input')[k].checked){
        Occasion_Array.push(Occasion_div.getElementsByTagName('input')[k].value);}
        }}
     // Collar Loop
     Collar_Array = [];
     if(Collar_div!==null){
     for(var k=0;k<Collar_div.getElementsByTagName('input').length;k++){
        if(Collar_div.getElementsByTagName('input')[k].checked){
        Collar_Array.push(Collar_div.getElementsByTagName('input')[k].value);}
        }}
     // type Loop
     type_Array = [];
     if(type_div!==null){
     for(var k=0;k<type_div.getElementsByTagName('input').length;k++){
        if(type_div.getElementsByTagName('input')[k].checked){
        type_Array.push(type_div.getElementsByTagName('input')[k].value);}
        }}

     // Distress Loop
     Distress_Array = [];
     if(Distress_div!==null){
     for(var k=0;k<Distress_div.getElementsByTagName('input').length;k++){
        if(Distress_div.getElementsByTagName('input')[k].checked){
        Distress_Array.push(Distress_div.getElementsByTagName('input')[k].value);}
        }}

     // Fade Loop
     Fade_Array = [];
     if(Fade_div!==null){
     for(var k=0;k<Fade_div.getElementsByTagName('input').length;k++){
        if(Fade_div.getElementsByTagName('input')[k].checked){
        Fade_Array.push(Fade_div.getElementsByTagName('input')[k].value);}
        }}

    // Waist_rise Loop
     Waist_rise_Array = [];
     if(Waist_rise_div!==null){
     for(var k=0;k<Waist_rise_div.getElementsByTagName('input').length;k++){
        if(Waist_rise_div.getElementsByTagName('input')[k].checked){
        Waist_rise_Array.push(Waist_rise_div.getElementsByTagName('input')[k].value);}
        }}

     // heel height Loop
     heel_height_Array = [];
     if(heel_height_div!==null){
     for(var k=0;k<heel_height_div.getElementsByTagName('input').length;k++){
        if(heel_height_div.getElementsByTagName('input')[k].checked){
        heel_height_Array.push(heel_height_div.getElementsByTagName('input')[k].value);}
        }}

      // Length Loop
     Length_Array = [];
     if(Length_div!==null){
     for(var k=0;k<Length_div.getElementsByTagName('input').length;k++){
        if(Length_div.getElementsByTagName('input')[k].checked){
        Length_Array.push(Length_div.getElementsByTagName('input')[k].value);}
        }}

      // Length Loop
     Closure_Array = [];
     if(Closure_div!==null){
     for(var k=0;k<Closure_div.getElementsByTagName('input').length;k++){
        if(Closure_div.getElementsByTagName('input')[k].checked){
        Closure_Array.push(Closure_div.getElementsByTagName('input')[k].value);}
        }}
     // Sleeve_style Loop
     Sleeve_style_Array = [];
     if(Sleeve_style_div!==null){
     for(var k=0;k<Sleeve_style_div.getElementsByTagName('input').length;k++){
        if(Sleeve_style_div.getElementsByTagName('input')[k].checked){
        Sleeve_style_Array.push(Sleeve_style_div.getElementsByTagName('input')[k].value);}
        }}

     // usage Loop
     usage_Array = [];
     if(usage_div!==null){
     for(var k=0;k<usage_div.getElementsByTagName('input').length;k++){
        if(usage_div.getElementsByTagName('input')[k].checked){
        usage_Array.push(usage_div.getElementsByTagName('input')[k].value);}
        }}
     // Hooded Loop
     Hooded_Array = [];
     if(Hooded_div!==null){
     for(var k=0;k<Hooded_div.getElementsByTagName('input').length;k++){
        if(Hooded_div.getElementsByTagName('input')[k].checked){
        Hooded_Array.push(Hooded_div.getElementsByTagName('input')[k].value);}
        }}
     // Ornamentation Loop
     Ornamentation_Array = [];
     if(Ornamentation_div!==null){
     for(var k=0;k<Ornamentation_div.getElementsByTagName('input').length;k++){
        if(Ornamentation_div.getElementsByTagName('input')[k].checked){
        Ornamentation_Array.push(Ornamentation_div.getElementsByTagName('input')[k].value);}
        }}
     // Styling Loop
     Styling_Array = [];
     if(Styling_div!==null){
     for(var k=0;k<Styling_div.getElementsByTagName('input').length;k++){
        if(Styling_div.getElementsByTagName('input')[k].checked){
        Styling_Array.push(Styling_div.getElementsByTagName('input')[k].value);}
        }}
      // Suitable_for Loop
     Suitable_for_Array = [];
     if(Suitable_for_div!==null){
     for(var k=0;k<Suitable_for_div.getElementsByTagName('input').length;k++){
        if(Suitable_for_div.getElementsByTagName('input')[k].checked){
        Suitable_for_Array.push(Suitable_for_div.getElementsByTagName('input')[k].value);}
        }}
     // Applied_for Loop
     Applied_for_Array = [];
     if(Applied_for_div!==null){
     for(var k=0;k<Applied_for_div.getElementsByTagName('input').length;k++){
        if(Applied_for_div.getElementsByTagName('input')[k].checked){
        Applied_for_Array.push(Applied_for_div.getElementsByTagName('input')[k].value);}
        }}

          // Hair_type Loop
    Hair_type_Array = [];
     if(Hair_type_div!==null){
     for(var k=0;k<Hair_type_div.getElementsByTagName('input').length;k++){
        if(Hair_type_div.getElementsByTagName('input')[k].checked){
        Hair_type_Array.push(Hair_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Pack_of Loop
     Pack_of_Array = [];
     if(Pack_of_div!==null){
     for(var k=0;k<Pack_of_div.getElementsByTagName('input').length;k++){
        if(Pack_of_div.getElementsByTagName('input')[k].checked){
        Pack_of_Array.push(Pack_of_div.getElementsByTagName('input')[k].value);}
        }}
      // Washable Loop
     Washable_Array = [];
     if(Washable_div!==null){
     for(var k=0;k<Washable_div.getElementsByTagName('input').length;k++){
        if(Washable_div.getElementsByTagName('input')[k].checked){
        Washable_Array.push(Washable_div.getElementsByTagName('input')[k].value);}
        }}
     // Water_resistance Loop
     Water_resistance_Array = [];
     if(Water_resistance_div!==null){
     for(var k=0;k<Water_resistance_div.getElementsByTagName('input').length;k++){
        if(Water_resistance_div.getElementsByTagName('input')[k].checked){
        Water_resistance_Array.push(Water_resistance_div.getElementsByTagName('input')[k].value);}
        }}
          // Rise Loop
     Rise_Array = [];
     if(Rise_div!==null){
     for(var k=0;k<Rise_div.getElementsByTagName('input').length;k++){
        if(Rise_div.getElementsByTagName('input')[k].checked){
        Rise_Array.push(Rise_div.getElementsByTagName('input')[k].value);}
        }}
     // Straps Loop
     Straps_Array = [];
     if(Straps_div!==null){
     for(var k=0;k<Straps_div.getElementsByTagName('input').length;k++){
        if(Straps_div.getElementsByTagName('input')[k].checked){
        Straps_Array.push(Straps_div.getElementsByTagName('input')[k].value);}
        }}
      // Wire_support Loop
     Wire_support_Array = [];
     if(Wire_support_div!==null){
     for(var k=0;k<Wire_support_div.getElementsByTagName('input').length;k++){
        if(Wire_support_div.getElementsByTagName('input')[k].checked){
        Wire_support_Array.push(Wire_support_div.getElementsByTagName('input')[k].value);}
        }}
     // Padding Loop
     Padding_Array = [];
     if(Padding_div!==null){
     for(var k=0;k<Padding_div.getElementsByTagName('input').length;k++){
        if(Padding_div.getElementsByTagName('input')[k].checked){
        Padding_Array.push(Padding_div.getElementsByTagName('input')[k].value);}
        }}
          // Seam Loop
     Seam_Array = [];
     if(Seam_div!==null){
     for(var k=0;k<Seam_div.getElementsByTagName('input').length;k++){
        if(Seam_div.getElementsByTagName('input')[k].checked){
        Seam_Array.push(Seam_div.getElementsByTagName('input')[k].value);}
        }}
     // Coverage Loop
     Coverage_Array = [];
     if(Coverage_div!==null){
     for(var k=0;k<Coverage_div.getElementsByTagName('input').length;k++){
        if(Coverage_div.getElementsByTagName('input')[k].checked){
        Coverage_Array.push(Coverage_div.getElementsByTagName('input')[k].value);}
        }}
      // Back_style Loop
     Back_style_Array = [];
     if(Back_style_div!==null){
     for(var k=0;k<Back_style_div.getElementsByTagName('input').length;k++){
        if(Back_style_div.getElementsByTagName('input')[k].checked){
        Back_style_Array.push(Back_style_div.getElementsByTagName('input')[k].value);}
        }}
     // Dial_color Loop
     Dial_color_Array = [];
     if(Dial_color_div!==null){
     for(var k=0;k<Dial_color_div.getElementsByTagName('input').length;k++){
        if(Dial_color_div.getElementsByTagName('input')[k].checked){
        Dial_color_Array.push(Dial_color_div.getElementsByTagName('input')[k].value);}
        }}
          // Features Loop
     Features_Array = [];
     if(Features_div!==null){
     for(var k=0;k<Features_div.getElementsByTagName('input').length;k++){
        if(Features_div.getElementsByTagName('input')[k].checked){
        Features_Array.push(Features_div.getElementsByTagName('input')[k].value);}
        }}
     // Dial_shape Loop
     Dial_shape_Array = [];
     if(Dial_shape_div!==null){
     for(var k=0;k<Dial_shape_div.getElementsByTagName('input').length;k++){
        if(Dial_shape_div.getElementsByTagName('input')[k].checked){
        Dial_shape_Array.push(Dial_shape_div.getElementsByTagName('input')[k].value);}
        }}
      // Strap_material Loop
     Strap_material_Array = [];
     if(Strap_material_div!==null){
     for(var k=0;k<Strap_material_div.getElementsByTagName('input').length;k++){
        if(Strap_material_div.getElementsByTagName('input')[k].checked){
        Strap_material_Array.push(Strap_material_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_compartments Loop
     Number_of_compartments_Array = [];
     if(Number_of_compartments_div!==null){
     for(var k=0;k<Number_of_compartments_div.getElementsByTagName('input').length;k++){
        if(Number_of_compartments_div.getElementsByTagName('input')[k].checked){
        Number_of_compartments_Array.push(Number_of_compartments_div.getElementsByTagName('input')[k].value);}
        }}
          // Material Loop
     Material_Array = [];
     if(Material_div!==null){
     for(var k=0;k<Material_div.getElementsByTagName('input').length;k++){
        if(Material_div.getElementsByTagName('input')[k].checked){
        Material_Array.push(Material_div.getElementsByTagName('input')[k].value);}
        }}
     // Bag_size Loop
     Bag_size_Array = [];
     if(Bag_size_div!==null){
     for(var k=0;k<Bag_size_div.getElementsByTagName('input').length;k++){
        if(Bag_size_div.getElementsByTagName('input')[k].checked){
        Bag_size_Array.push(Bag_size_div.getElementsByTagName('input')[k].value);}
        }}
      // wheels Loop
     wheels_Array = [];
     if(wheels_div!==null){
     for(var k=0;k<wheels_div.getElementsByTagName('input').length;k++){
        if(wheels_div.getElementsByTagName('input')[k].checked){
        wheels_Array.push(wheels_div.getElementsByTagName('input')[k].value);}
        }}
     // body_type Loop
     body_type_Array = [];
     if(body_type_div!==null){
     for(var k=0;k<body_type_div.getElementsByTagName('input').length;k++){
        if(body_type_div.getElementsByTagName('input')[k].checked){
        body_type_Array.push(body_type_div.getElementsByTagName('input')[k].value);}
        }}
          // capacity Loop
     capacity_Array = [];
     if(capacity_div!==null){
     for(var k=0;k<capacity_div.getElementsByTagName('input').length;k++){
        if(capacity_div.getElementsByTagName('input')[k].checked){
       capacity_Array.push(capacity_div.getElementsByTagName('input')[k].value);}
        }}
     // card_slot Loop
     card_slot_Array = [];
     if(card_slot_div!==null){
     for(var k=0;k<card_slot_div.getElementsByTagName('input').length;k++){
        if(card_slot_div.getElementsByTagName('input')[k].checked){
        card_slot_Array.push(card_slot_div.getElementsByTagName('input')[k].value);}
        }}
      // Strap_color Loop
     Strap_color_Array = [];
     if(Strap_color_div!==null){
     for(var k=0;k<Strap_color_div.getElementsByTagName('input').length;k++){
        if(Strap_color_div.getElementsByTagName('input')[k].checked){
        Strap_color_Array.push(Strap_color_div.getElementsByTagName('input')[k].value);}
        }}
     // Compatible_OS Loop
     Compatible_OS_Array = [];
     if(Compatible_OS_div!==null){
     for(var k=0;k<Compatible_OS_div.getElementsByTagName('input').length;k++){
        if(Compatible_OS_div.getElementsByTagName('input')[k].checked){
        Compatible_OS_Array.push(Compatible_OS_div.getElementsByTagName('input')[k].value);}
        }}
          // Display_type Loop
     Display_type_Array = [];
     if(Display_type_div!==null){
     for(var k=0;k<Display_type_div.getElementsByTagName('input').length;k++){
        if(Display_type_div.getElementsByTagName('input')[k].checked){
        Display_type_Array.push(Display_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Gemstones Loop
     Gemstones_Array = [];
     if(Gemstones_div!==null){
     for(var k=0;k<Gemstones_div.getElementsByTagName('input').length;k++){
        if(Gemstones_div.getElementsByTagName('input')[k].checked){
        Gemstones_Array.push(Gemstones_div.getElementsByTagName('input')[k].value);}
        }}
      // Gender Loop
     Gender_Array = [];
     if(Gender_div!==null){
     for(var k=0;k<Gender_div.getElementsByTagName('input').length;k++){
        if(Gender_div.getElementsByTagName('input')[k].checked){
        Gender_Array.push(Gender_div.getElementsByTagName('input')[k].value);}
        }}
     // Blade_material Loop
     Blade_material_Array = [];
     if(Blade_material_div!==null){
     for(var k=0;k<Blade_material_div.getElementsByTagName('input').length;k++){
        if(Blade_material_div.getElementsByTagName('input')[k].checked){
        Blade_material_Array.push(Blade_material_div.getElementsByTagName('input')[k].value);}
        }}
          // Battery_run_time Loop
     Battery_run_time_Array = [];
     if(Battery_run_time_div!==null){
     for(var k=0;k<Battery_run_time_div.getElementsByTagName('input').length;k++){
        if(Battery_run_time_div.getElementsByTagName('input')[k].checked){
        Battery_run_time_Array.push(Battery_run_time_div.getElementsByTagName('input')[k].value);}
        }}
     // Body_material Loop
     Body_material_Array = [];
     if(Body_material_div!==null){
     for(var k=0;k<Body_material_div.getElementsByTagName('input').length;k++){
        if(Body_material_div.getElementsByTagName('input')[k].checked){
        Body_material_Array.push(Body_material_div.getElementsByTagName('input')[k].value);}
        }}
      // Plate_coating Loop
     Plate_coating_Array = [];
     if(Plate_coating_div!==null){
     for(var k=0;k<Plate_coating_div.getElementsByTagName('input').length;k++){
        if(Plate_coating_div.getElementsByTagName('input')[k].checked){
        Plate_coating_Array.push(Plate_coating_div.getElementsByTagName('input')[k].value);}
        }}
     // Wattage Loop
     Wattage_Array = [];
     if(Wattage_div!==null){
     for(var k=0;k<Wattage_div.getElementsByTagName('input').length;k++){
        if(Wattage_div.getElementsByTagName('input')[k].checked){
        Wattage_Array.push(Wattage_div.getElementsByTagName('input')[k].value);}
        }}
          // Collection Loop
     Collection_Array = [];
     if(Collection_div!==null){
     for(var k=0;k<Collection_div.getElementsByTagName('input').length;k++){
        if(Collection_div.getElementsByTagName('input')[k].checked){
        Collection_Array.push(Collection_div.getElementsByTagName('input')[k].value);}
        }}
     // Ring_size Loop
     Ring_size_Array = [];
     if(Ring_size_div!==null){
     for(var k=0;k<Ring_size_div.getElementsByTagName('input').length;k++){
        if(Ring_size_div.getElementsByTagName('input')[k].checked){
        Ring_size_Array.push(Ring_size_div.getElementsByTagName('input')[k].value);}
        }}
      // Dress_length Loop
     Dress_length_Array = [];
     if(Dress_length_div!==null){
     for(var k=0;k<Dress_length_div.getElementsByTagName('input').length;k++){
        if(Dress_length_div.getElementsByTagName('input')[k].checked){
        Dress_length_Array.push(Dress_length_div.getElementsByTagName('input')[k].value);}
        }}
     // Length_type Loop
     Length_type_Array = [];
     if(Length_type_div!==null){
     for(var k=0;k<Length_type_div.getElementsByTagName('input').length;k++){
        if(Length_type_div.getElementsByTagName('input')[k].checked){
        Length_type_Array.push(Length_type_div.getElementsByTagName('input')[k].value);}
        }}
          // Saree_type Loop
     Saree_type_Array = [];
     if(Saree_type_div!==null){
     for(var k=0;k<Saree_type_div.getElementsByTagName('input').length;k++){
        if(Saree_type_div.getElementsByTagName('input')[k].checked){
        Saree_type_Array.push(Saree_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Saree_style Loop
     Saree_style_Array = [];
     if(Saree_style_div!==null){
     for(var k=0;k<Saree_style_div.getElementsByTagName('input').length;k++){
        if(Saree_style_div.getElementsByTagName('input')[k].checked){
        Saree_style_Array.push(Saree_style_div.getElementsByTagName('input')[k].value);}
        }}
      // Saree_length Loop
     Saree_length_Array = [];
     if(Saree_length_div!==null){
     for(var k=0;k<Saree_length_div.getElementsByTagName('input').length;k++){
        if(Saree_length_div.getElementsByTagName('input')[k].checked){
        Saree_length_Array.push(Saree_length_div.getElementsByTagName('input')[k].value);}
        }}
     // Blouse_included Loop
     Blouse_included_Array = [];
     if(Blouse_included_div!==null){
     for(var k=0;k<Blouse_included_div.getElementsByTagName('input').length;k++){
        if(Blouse_included_div.getElementsByTagName('input')[k].checked){
        Blouse_included_Array.push(Blouse_included_div.getElementsByTagName('input')[k].value);}
        }}
           // Saree_Fall_length Loop
     Saree_Fall_length_Array = [];
     if(Saree_Fall_length_div!==null){
     for(var k=0;k<Saree_Fall_length_div.getElementsByTagName('input').length;k++){
        if(Saree_Fall_length_div.getElementsByTagName('input')[k].checked){
        Saree_Fall_length_Array.push(Saree_Fall_length_div.getElementsByTagName('input')[k].value);}
        }}
     // Saree_Fall_width Loop
     Saree_Fall_width_Array = [];
     if(Saree_Fall_width_div!==null){
     for(var k=0;k<Saree_Fall_width_div.getElementsByTagName('input').length;k++){
        if(Saree_Fall_width_div.getElementsByTagName('input')[k].checked){
        Saree_Fall_width_Array.push(Saree_Fall_width_div.getElementsByTagName('input')[k].value);}
        }}
      // Dupatta_included Loop
     Dupatta_included_Array = [];
     if(Dupatta_included_div!==null){
     for(var k=0;k<Dupatta_included_div.getElementsByTagName('input').length;k++){
        if(Dupatta_included_div.getElementsByTagName('input')[k].checked){
        Dupatta_included_Array.push(Dupatta_included_div.getElementsByTagName('input')[k].value);}
        }}
     // Rechargeable Loop
     Rechargeable_Array = [];
     if(Rechargeable_div!==null){
     for(var k=0;k<Rechargeable_div.getElementsByTagName('input').length;k++){
        if(Rechargeable_div.getElementsByTagName('input')[k].checked){
        Rechargeable_Array.push(Rechargeable_div.getElementsByTagName('input')[k].value);}
        }}

          // Battery_operated Loop
     Battery_operated_Array = [];
     if(Battery_operated_div!==null){
     for(var k=0;k<Battery_operated_div.getElementsByTagName('input').length;k++){
        if(Battery_operated_div.getElementsByTagName('input')[k].checked){
        Battery_operated_Array.push(Battery_operated_div.getElementsByTagName('input')[k].value);}
        }}
     // Character Loop
     Character_Array = [];
     if(Character_div!==null){
     for(var k=0;k<Character_div.getElementsByTagName('input').length;k++){
        if(Character_div.getElementsByTagName('input')[k].checked){
        Character_Array.push(Character_div.getElementsByTagName('input')[k].value);}
        }}
      // Thermoware Loop
     Thermoware_Array = [];
     if(Thermoware_div!==null){
     for(var k=0;k<Thermoware_div.getElementsByTagName('input').length;k++){
        if(Thermoware_div.getElementsByTagName('input')[k].checked){
        Thermoware_Array.push(Thermoware_div.getElementsByTagName('input')[k].value);}
        }}
     // Age_group Loop
     Age_group_Array = [];
     if(Age_group_div!==null){
     for(var k=0;k<Age_group_div.getElementsByTagName('input').length;k++){
        if(Age_group_div.getElementsByTagName('input')[k].checked){
        Age_group_Array.push(Age_group_div.getElementsByTagName('input')[k].value);}
        }}
          // Pot_included Loop
     Pot_included_Array = [];
     if(Pot_included_div!==null){
     for(var k=0;k<Pot_included_div.getElementsByTagName('input').length;k++){
        if(Pot_included_div.getElementsByTagName('input')[k].checked){
        Pot_included_Array.push(Pot_included_div.getElementsByTagName('input')[k].value);}
        }}
     // Bonsai Loop
     Bonsai_Array = [];
     if(Bonsai_div!==null){
     for(var k=0;k<Bonsai_div.getElementsByTagName('input').length;k++){
        if(Bonsai_div.getElementsByTagName('input')[k].checked){
        Bonsai_Array.push(Bonsai_div.getElementsByTagName('input')[k].value);}
        }}
      // Outer_material Loop
     Outer_material_Array = [];
     if(Outer_material_div!==null){
     for(var k=0;k<Outer_material_div.getElementsByTagName('input').length;k++){
        if(Outer_material_div.getElementsByTagName('input')[k].checked){
        Outer_material_Array.push(Outer_material_div.getElementsByTagName('input')[k].value);}
        }}
     // Towel_type Loop
     Towel_type_Array = [];
     if(Towel_type_div!==null){
     for(var k=0;k<Towel_type_div.getElementsByTagName('input').length;k++){
        if(Towel_type_div.getElementsByTagName('input')[k].checked){
        Towel_type_Array.push(Towel_type_div.getElementsByTagName('input')[k].value);}
        }}
          // Reversible Loop
     Reversible_Array = [];
     if(Reversible_div!==null){
     for(var k=0;k<Reversible_div.getElementsByTagName('input').length;k++){
        if(Reversible_div.getElementsByTagName('input')[k].checked){
        Reversible_Array.push(Reversible_div.getElementsByTagName('input')[k].value);}
        }}
     // width Loop
     width_Array = [];
     if(width_div!==null){
     for(var k=0;k<width_div.getElementsByTagName('input').length;k++){
        if(width_div.getElementsByTagName('input')[k].checked){
        width_Array.push(width_div.getElementsByTagName('input')[k].value);}
        }}
      // Shape Loop
     Shape_Array = [];
     if(Shape_div!==null){
     for(var k=0;k<Shape_div.getElementsByTagName('input').length;k++){
        if(Shape_div.getElementsByTagName('input')[k].checked){
        Shape_Array.push(Shape_div.getElementsByTagName('input')[k].value);}
        }}
     // Microwave_safe Loop
     Microwave_safe_Array = [];
     if(Microwave_safe_div!==null){
     for(var k=0;k<Microwave_safe_div.getElementsByTagName('input').length;k++){
        if(Microwave_safe_div.getElementsByTagName('input')[k].checked){
        Microwave_safe_Array.push(Microwave_safe_div.getElementsByTagName('input')[k].value);}
        }}
          // Showpiece_type Loop
     Showpiece_type_Array = [];
     if(Showpiece_type_div!==null){
     for(var k=0;k<Showpiece_type_div.getElementsByTagName('input').length;k++){
        if(Showpiece_type_div.getElementsByTagName('input')[k].checked){
        Showpiece_type_Array.push(Showpiece_type_div.getElementsByTagName('input')[k].value);}
        }}
     // No_of_prongs Loop
     No_of_prongs_Array = [];
     if(No_of_prongs_div!==null){
     for(var k=0;k<No_of_prongs_div.getElementsByTagName('input').length;k++){
        if(No_of_prongs_div.getElementsByTagName('input')[k].checked){
        No_of_prongs_Array.push(No_of_prongs_div.getElementsByTagName('input')[k].value);}
        }}
      // Fragrance Loop
     Fragrance_Array = [];
     if(Fragrance_div!==null){
     for(var k=0;k<Fragrance_div.getElementsByTagName('input').length;k++){
        if(Fragrance_div.getElementsByTagName('input')[k].checked){
        Fragrance_Array.push(Fragrance_div.getElementsByTagName('input')[k].value);}
        }}
     // Quantity Loop
     Quantity_Array = [];
     if(Quantity_div!==null){
     for(var k=0;k<Quantity_div.getElementsByTagName('input').length;k++){
        if(Quantity_div.getElementsByTagName('input')[k].checked){
        Quantity_Array.push(Quantity_div.getElementsByTagName('input')[k].value);}
        }}
          // Form Loop
     Form_Array = [];
     if(Form_div!==null){
     for(var k=0;k<Form_div.getElementsByTagName('input').length;k++){
        if(Form_div.getElementsByTagName('input')[k].checked){
        Form_Array.push(Form_div.getElementsByTagName('input')[k].value);}
        }}
     // Light_used Loop
     Light_used_Array = [];
     if(Light_used_div!==null){
     for(var k=0;k<Light_used_div.getElementsByTagName('input').length;k++){
        if(Light_used_div.getElementsByTagName('input')[k].checked){
        Light_used_Array.push(Light_used_div.getElementsByTagName('input')[k].value);}
        }}
      // adjustable Loop
     adjustable_Array = [];
     if(adjustable_div!==null){
     for(var k=0;k<adjustable_div.getElementsByTagName('input').length;k++){
        if(adjustable_div.getElementsByTagName('input')[k].checked){
        adjustable_Array.push(adjustable_div.getElementsByTagName('input')[k].value);}
        }}
     // Mount_type Loop
     Mount_type_Array = [];
     if(Mount_type_div!==null){
     for(var k=0;k<Mount_type_div.getElementsByTagName('input').length;k++){
        if(Mount_type_div.getElementsByTagName('input')[k].checked){
        Mount_type_Array.push(Mount_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Bulb_included Loop
     Bulb_included_Array = [];
     if(Bulb_included_div!==null){
     for(var k=0;k<Bulb_included_div.getElementsByTagName('input').length;k++){
        if(Bulb_included_div.getElementsByTagName('input')[k].checked){
        Bulb_included_Array.push(Bulb_included_div.getElementsByTagName('input')[k].value);}
        }}
     // Dimmable Loop
     Dimmable_Array = [];
     if(Dimmable_div!==null){
     for(var k=0;k<Dimmable_div.getElementsByTagName('input').length;k++){
        if(Dimmable_div.getElementsByTagName('input')[k].checked){
        Dimmable_Array.push(Dimmable_div.getElementsByTagName('input')[k].value);}
        }}
      // Foldable Loop
     Foldable_Array = [];
     if(Foldable_div!==null){
     for(var k=0;k<Foldable_div.getElementsByTagName('input').length;k++){
        if(Foldable_div.getElementsByTagName('input')[k].checked){
        Foldable_Array.push(Foldable_div.getElementsByTagName('input')[k].value);}
        }}
     // Adjustable_height Loop
     Adjustable_height_Array = [];
     if(Adjustable_height_div!==null){
     for(var k=0;k<Adjustable_height_div.getElementsByTagName('input').length;k++){
        if(Adjustable_height_div.getElementsByTagName('input')[k].checked){
        Adjustable_height_Array.push(Adjustable_height_div.getElementsByTagName('input')[k].value);}
        }}

          // Mouse_tray Loop
     Mouse_tray_Array = [];
     if(Mouse_tray_div!==null){
     for(var k=0;k<Mouse_tray_div.getElementsByTagName('input').length;k++){
        if(Mouse_tray_div.getElementsByTagName('input')[k].checked){
        Mouse_tray_Array.push(Mouse_tray_div.getElementsByTagName('input')[k].value);}
        }}
     // Height Loop
     Height_Array = [];
     if(Height_div!==null){
     for(var k=0;k<Height_div.getElementsByTagName('input').length;k++){
        if(Height_div.getElementsByTagName('input')[k].checked){
        Height_Array.push(Height_div.getElementsByTagName('input')[k].value);}
        }}
      // Storage_included Loop
     Storage_included_Array = [];
     if(Storage_included_div!==null){
     for(var k=0;k<Storage_included_div.getElementsByTagName('input').length;k++){
        if(Storage_included_div.getElementsByTagName('input')[k].checked){
        Storage_included_Array.push(Storage_included_div.getElementsByTagName('input')[k].value);}
        }}
     // Separated Loop
     Separated_Array = [];
     if(Separated_div!==null){
     for(var k=0;k<Separated_div.getElementsByTagName('input').length;k++){
        if(Separated_div.getElementsByTagName('input')[k].checked){
        Separated_Array.push(Separated_div.getElementsByTagName('input')[k].value);}
        }}
          // Weight Loop
     Weight_Array = [];
     if(Weight_div!==null){
     for(var k=0;k<Weight_div.getElementsByTagName('input').length;k++){
        if(Weight_div.getElementsByTagName('input')[k].checked){
        Weight_Array.push(Weight_div.getElementsByTagName('input')[k].value);}
        }}
     // Heart_rate_sensor Loop
     Heart_rate_sensor_Array = [];
     if(Heart_rate_sensor_div!==null){
     for(var k=0;k<Heart_rate_sensor_div.getElementsByTagName('input').length;k++){
        if(Heart_rate_sensor_div.getElementsByTagName('input')[k].checked){
        Heart_rate_sensor_Array.push(Heart_rate_sensor_div.getElementsByTagName('input')[k].value);}
        }}
      // Design Loop
     Design_Array = [];
     if(Design_div!==null){
     for(var k=0;k<Design_div.getElementsByTagName('input').length;k++){
        if(Design_div.getElementsByTagName('input')[k].checked){
        Design_Array.push(Design_div.getElementsByTagName('input')[k].value);}
        }}
     // Diameter Loop
     Diameter_Array = [];
     if(Diameter_div!==null){
     for(var k=0;k<Diameter_div.getElementsByTagName('input').length;k++){
        if(Diameter_div.getElementsByTagName('input')[k].checked){
        Diameter_Array.push(Diameter_div.getElementsByTagName('input')[k].value);}
        }}
          // Contains_pump Loop
     Contains_pump_Array = [];
     if(Contains_pump_div!==null){
     for(var k=0;k<Contains_pump_div.getElementsByTagName('input').length;k++){
        if(Contains_pump_div.getElementsByTagName('input')[k].checked){
        Contains_pump_Array.push(Contains_pump_div.getElementsByTagName('input')[k].value);}
        }}
     // Thickness Loop
     Thickness_Array = [];
     if(Thickness_div!==null){
     for(var k=0;k<Thickness_div.getElementsByTagName('input').length;k++){
        if(Thickness_div.getElementsByTagName('input')[k].checked){
        Thickness_Array.push(Thickness_div.getElementsByTagName('input')[k].value);}
        }}
      // Grip Loop
     Grip_Array = [];
     if(Grip_div!==null){
     for(var k=0;k<Grip_div.getElementsByTagName('input').length;k++){
        if(Grip_div.getElementsByTagName('input')[k].checked){
        Grip_Array.push(Grip_div.getElementsByTagName('input')[k].value);}
        }}
     // Playing_level Loop
     Playing_level_Array = [];
     if(Playing_level_div!==null){
     for(var k=0;k<Playing_level_div.getElementsByTagName('input').length;k++){
        if(Playing_level_div.getElementsByTagName('input')[k].checked){
        Playing_level_Array.push(Playing_level_div.getElementsByTagName('input')[k].value);}
        }}
          // Strung_type Loop
     Strung_type_Array = [];
     if(Strung_type_div!==null){
     for(var k=0;k<Strung_type_div.getElementsByTagName('input').length;k++){
        if(Strung_type_div.getElementsByTagName('input')[k].checked){
        Strung_type_Array.push(Strung_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Cover_type Loop
     Cover_type_Array = [];
     if(Cover_type_div!==null){
     for(var k=0;k<Cover_type_div.getElementsByTagName('input').length;k++){
        if(Cover_type_div.getElementsByTagName('input')[k].checked){
        Cover_type_Array.push(Cover_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Grip_size Loop
     Grip_size_Array = [];
     if(Grip_size_div!==null){
     for(var k=0;k<Grip_size_div.getElementsByTagName('input').length;k++){
        if(Grip_size_div.getElementsByTagName('input')[k].checked){
        Grip_size_Array.push(Grip_size_div.getElementsByTagName('input')[k].value);}
        }}
     // Head_size Loop
     Head_size_Array = [];
     if(Head_size_div!==null){
     for(var k=0;k<Head_size_div.getElementsByTagName('input').length;k++){
        if(Head_size_div.getElementsByTagName('input')[k].checked){
        Head_size_Array.push(Head_size_div.getElementsByTagName('input')[k].value);}
        }}
          // Speed Loop
     Speed_Array = [];
     if(Speed_div!==null){
     for(var k=0;k<Speed_div.getElementsByTagName('input').length;k++){
        if(Speed_div.getElementsByTagName('input')[k].checked){
        Speed_Array.push(Speed_div.getElementsByTagName('input')[k].value);}
        }}
     // Willow_type Loop
     Willow_type_Array = [];
     if(Willow_type_div!==null){
     for(var k=0;k<Willow_type_div.getElementsByTagName('input').length;k++){
        if(Willow_type_div.getElementsByTagName('input')[k].checked){
        Willow_type_Array.push(Willow_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Bat_grade Loop
     Bat_grade_Array = [];
     if(Bat_grade_div!==null){
     for(var k=0;k<Bat_grade_div.getElementsByTagName('input').length;k++){
        if(Bat_grade_div.getElementsByTagName('input')[k].checked){
        Bat_grade_Array.push(Bat_grade_div.getElementsByTagName('input')[k].value);}
        }}
     // Cover Loop
     Cover_Array = [];
     if(Cover_div!==null){
     for(var k=0;k<Cover_div.getElementsByTagName('input').length;k++){
        if(Cover_div.getElementsByTagName('input')[k].checked){
        Cover_Array.push(Cover_div.getElementsByTagName('input')[k].value);}
        }}
          // Visor Loop
     Visor_Array = [];
     if(Visor_div!==null){
     for(var k=0;k<Visor_div.getElementsByTagName('input').length;k++){
        if(Visor_div.getElementsByTagName('input')[k].checked){
        Visor_Array.push(Visor_div.getElementsByTagName('input')[k].value);}
        }}
     // Bails_included Loop
     Bails_included_Array = [];
     if(Bails_included_div!==null){
     for(var k=0;k<Bails_included_div.getElementsByTagName('input').length;k++){
        if(Bails_included_div.getElementsByTagName('input')[k].checked){
        Bails_included_Array.push(Bails_included_div.getElementsByTagName('input')[k].value);}
        }}
      // Fill_type Loop
     Fill_type_Array = [];
     if(Fill_type_div!==null){
     for(var k=0;k<Fill_type_div.getElementsByTagName('input').length;k++){
        if(Fill_type_div.getElementsByTagName('input')[k].checked){
        Fill_type_Array.push(Fill_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Tyre_size Loop
     Tyre_size_Array = [];
     if(Tyre_size_div!==null){
     for(var k=0;k<Tyre_size_div.getElementsByTagName('input').length;k++){
        if(Tyre_size_div.getElementsByTagName('input')[k].checked){
        Tyre_size_Array.push(Tyre_size_div.getElementsByTagName('input')[k].value);}
        }}
          // Gear_type Loop
     Gear_type_Array = [];
     if(Gear_type_div!==null){
     for(var k=0;k<Gear_type_div.getElementsByTagName('input').length;k++){
        if(Gear_type_div.getElementsByTagName('input')[k].checked){
        Gear_type_Array.push(Gear_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Rear_brake Loop
     Rear_brake_Array = [];
     if(Rear_brake_div!==null){
     for(var k=0;k<Rear_brake_div.getElementsByTagName('input').length;k++){
        if(Rear_brake_div.getElementsByTagName('input')[k].checked){
        Rear_brake_Array.push(Rear_brake_div.getElementsByTagName('input')[k].value);}
        }}
      // Front_brake Loop
     Front_brake_Array = [];
     if(Front_brake_div!==null){
     for(var k=0;k<Front_brake_div.getElementsByTagName('input').length;k++){
        if(Front_brake_div.getElementsByTagName('input')[k].checked){
        Front_brake_Array.push(Front_brake_div.getElementsByTagName('input')[k].value);}
        }}
     // Playback_mode Loop
     Playback_mode_Array = [];
     if(Playback_mode_div!==null){
     for(var k=0;k<Playback_mode_div.getElementsByTagName('input').length;k++){
        if(Playback_mode_div.getElementsByTagName('input')[k].checked){
        Playback_mode_Array.push(Playback_mode_div.getElementsByTagName('input')[k].value);}
        }}
          // Accessory_holder Loop
     Accessory_holder_Array = [];
     if(Accessory_holder_div!==null){
     for(var k=0;k<Accessory_holder_div.getElementsByTagName('input').length;k++){
        if(Accessory_holder_div.getElementsByTagName('input')[k].checked){
        Accessory_holder_Array.push(Accessory_holder_div.getElementsByTagName('input')[k].value);}
        }}
     // Rod_power Loop
     Rod_power_Array = [];
     if(Rod_power_div!==null){
     for(var k=0;k<Rod_power_div.getElementsByTagName('input').length;k++){
        if(Rod_power_div.getElementsByTagName('input')[k].checked){
        Rod_power_Array.push(Rod_power_div.getElementsByTagName('input')[k].value);}
        }}
      // Rod_type Loop
     Rod_type_Array = [];
     if(Rod_type_div!==null){
     for(var k=0;k<Rod_type_div.getElementsByTagName('input').length;k++){
        if(Rod_type_div.getElementsByTagName('input')[k].checked){
        Rod_type_Array.push(Rod_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Rod_action Loop
     Rod_action_Array = [];
     if(Rod_action_div!==null){
     for(var k=0;k<Rod_action_div.getElementsByTagName('input').length;k++){
        if(Rod_action_div.getElementsByTagName('input')[k].checked){
        Rod_action_Array.push(Rod_action_div.getElementsByTagName('input')[k].value);}
        }}
          // Handle_material Loop
     Handle_material_Array = [];
     if(Handle_material_div!==null){
     for(var k=0;k<Handle_material_div.getElementsByTagName('input').length;k++){
        if(Handle_material_div.getElementsByTagName('input')[k].checked){
        Handle_material_Array.push(Handle_material_div.getElementsByTagName('input')[k].value);}
        }}
     // Construction Loop
     Construction_Array = [];
     if(Construction_div!==null){
     for(var k=0;k<Construction_div.getElementsByTagName('input').length;k++){
        if(Construction_div.getElementsByTagName('input')[k].checked){
        Construction_Array.push(Construction_div.getElementsByTagName('input')[k].value);}
        }}
      // Drag_type Loop
     Drag_type_Array = [];
     if(Drag_type_div!==null){
     for(var k=0;k<Drag_type_div.getElementsByTagName('input').length;k++){
        if(Drag_type_div.getElementsByTagName('input')[k].checked){
        Drag_type_Array.push(Drag_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Container_type Loop
     Container_type_Array = [];
     if(Container_type_div!==null){
     for(var k=0;k<Container_type_div.getElementsByTagName('input').length;k++){
        if(Container_type_div.getElementsByTagName('input')[k].checked){
        Container_type_Array.push(Container_type_div.getElementsByTagName('input')[k].value);}
        }}
          // Edge_type Loop
     Edge_type_Array = [];
     if(Edge_type_div!==null){
     for(var k=0;k<Edge_type_div.getElementsByTagName('input').length;k++){
        if(Edge_type_div.getElementsByTagName('input')[k].checked){
        Edge_type_Array.push(Edge_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Sheath Loop
     Sheath_Array = [];
     if(Sheath_div!==null){
     for(var k=0;k<Sheath_div.getElementsByTagName('input').length;k++){
        if(Sheath_div.getElementsByTagName('input')[k].checked){
        Sheath_Array.push(Sheath_div.getElementsByTagName('input')[k].value);}
        }}
      // Coated Loop
     Coated_Array = [];
     if(Coated_div!==null){
     for(var k=0;k<Coated_div.getElementsByTagName('input').length;k++){
        if(Coated_div.getElementsByTagName('input')[k].checked){
        Coated_Array.push(Coated_div.getElementsByTagName('input')[k].value);}
        }}
     // Finish Loop
     Finish_Array = [];
     if(Finish_div!==null){
     for(var k=0;k<Finish_div.getElementsByTagName('input').length;k++){
        if(Finish_div.getElementsByTagName('input')[k].checked){
        Finish_Array.push(Finish_div.getElementsByTagName('input')[k].value);}
        }}
           // Attachment_type Loop
     Attachment_type_Array = [];
     if(Attachment_type_div!==null){
     for(var k=0;k<Attachment_type_div.getElementsByTagName('input').length;k++){
        if(Attachment_type_div.getElementsByTagName('input')[k].checked){
        Attachment_type_Array.push(Attachment_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Auto_locking Loop
     Auto_locking_Array = [];
     if(Auto_locking_div!==null){
     for(var k=0;k<Auto_locking_div.getElementsByTagName('input').length;k++){
        if(Auto_locking_div.getElementsByTagName('input')[k].checked){
        Auto_locking_Array.push(Auto_locking_div.getElementsByTagName('input')[k].value);}
        }}
      // Tray_included Loop
     Tray_included_Array = [];
     if(Tray_included_div!==null){
     for(var k=0;k<Tray_included_div.getElementsByTagName('input').length;k++){
        if(Tray_included_div.getElementsByTagName('input')[k].checked){
        Tray_included_Array.push(Tray_included_div.getElementsByTagName('input')[k].value);}
        }}
     // Magnetic Loop
     Magnetic_Array = [];
     if(Magnetic_div!==null){
     for(var k=0;k<Magnetic_div.getElementsByTagName('input').length;k++){
        if(Magnetic_div.getElementsByTagName('input')[k].checked){
        Magnetic_Array.push(Magnetic_div.getElementsByTagName('input')[k].value);}
        }}
     // Diary_type Loop
     Diary_type_Array = [];
     if(Diary_type_div!==null){
     for(var k=0;k<Diary_type_div.getElementsByTagName('input').length;k++){
        if(Diary_type_div.getElementsByTagName('input')[k].checked){
       Diary_type_Array.push(Diary_type_div.getElementsByTagName('input')[k].value);}
        }}

          // Steam_burst Loop
     Steam_burst_Array = [];
     if(Steam_burst_div!==null){
     for(var k=0;k<Steam_burst_div.getElementsByTagName('input').length;k++){
        if(Steam_burst_div.getElementsByTagName('input')[k].checked){
        Steam_burst_Array.push(Steam_burst_div.getElementsByTagName('input')[k].value);}
        }}
     // Spray Loop
     Spray_Array = [];
     if(Spray_div!==null){
     for(var k=0;k<Spray_div.getElementsByTagName('input').length;k++){
        if(Spray_div.getElementsByTagName('input')[k].checked){
        Spray_Array.push(Spray_div.getElementsByTagName('input')[k].value);}
        }}
      // Power_consumption Loop
     Power_consumption_Array = [];
     if(Power_consumption_div!==null){
     for(var k=0;k<Power_consumption_div.getElementsByTagName('input').length;k++){
        if(Power_consumption_div.getElementsByTagName('input')[k].checked){
        Power_consumption_Array.push(Power_consumption_div.getElementsByTagName('input')[k].value);}
        }}
     // Rated_pressure Loop
     Rated_pressure_Array = [];
     if(Rated_pressure_div!==null){
     for(var k=0;k<Rated_pressure_div.getElementsByTagName('input').length;k++){
        if(Rated_pressure_div.getElementsByTagName('input')[k].checked){
        Rated_pressure_Array.push(Rated_pressure_div.getElementsByTagName('input')[k].value);}
        }}
          // Star_rating Loop
     Star_rating_Array = [];
     if(Star_rating_div!==null){
     for(var k=0;k<Star_rating_div.getElementsByTagName('input').length;k++){
        if(Star_rating_div.getElementsByTagName('input')[k].checked){
        Star_rating_Array.push(Star_rating_div.getElementsByTagName('input')[k].value);}
        }}
     // Filter_type Loop
     Filter_type_Array = [];
     if(Filter_type_div!==null){
     for(var k=0;k<Filter_type_div.getElementsByTagName('input').length;k++){
        if(Filter_type_div.getElementsByTagName('input')[k].checked){
        Filter_type_Array.push(Filter_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Auto_revolving_heater Loop
     Auto_revolving_heater_Array = [];
     if(Auto_revolving_heater_div!==null){
     for(var k=0;k<Auto_revolving_heater_div.getElementsByTagName('input').length;k++){
        if(Auto_revolving_heater_div.getElementsByTagName('input')[k].checked){
        Auto_revolving_heater_Array.push(Auto_revolving_heater_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_stitches Loop
     Number_of_stitches_Array = [];
     if(Number_of_stitches_div!==null){
     for(var k=0;k<Number_of_stitches_div.getElementsByTagName('input').length;k++){
        if(Number_of_stitches_div.getElementsByTagName('input')[k].checked){
        Number_of_stitches_Array.push(Number_of_stitches_div.getElementsByTagName('input')[k].value);}
        }}
          // Number_of_blades Loop
     Number_of_blades_Array = [];
     if(Number_of_blades_div!==null){
     for(var k=0;k<Number_of_blades_div.getElementsByTagName('input').length;k++){
        if(Number_of_blades_div.getElementsByTagName('input')[k].checked){
        Number_of_blades_Array.push(Number_of_blades_div.getElementsByTagName('input')[k].value);}
        }}
     // Load_type Loop
     Load_type_Array = [];
     if(Load_type_div!==null){
     for(var k=0;k<Load_type_div.getElementsByTagName('input').length;k++){
        if(Load_type_div.getElementsByTagName('input')[k].checked){
        Load_type_Array.push(Load_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Number_of_ways Loop
     Number_of_ways_Array = [];
     if(Number_of_ways_div!==null){
     for(var k=0;k<Number_of_ways_div.getElementsByTagName('input').length;k++){
        if(Number_of_ways_div.getElementsByTagName('input')[k].checked){
        Number_of_ways_Array.push(Number_of_ways_div.getElementsByTagName('input')[k].value);}
        }}
     // Wired_or_wireless Loop
     Wired_or_wireless_Array = [];
     if(Wired_or_wireless_div!==null){
     for(var k=0;k<Wired_or_wireless_div.getElementsByTagName('input').length;k++){
        if(Wired_or_wireless_div.getElementsByTagName('input')[k].checked){
        Wired_or_wireless_Array.push(Wired_or_wireless_div.getElementsByTagName('input')[k].value);}
        }}
          // Energy_ratings Loop
     Energy_ratings_Array = [];
     if(Energy_ratings_div!==null){
     for(var k=0;k<Energy_ratings_div.getElementsByTagName('input').length;k++){
        if(Energy_ratings_div.getElementsByTagName('input')[k].checked){
        Energy_ratings_Array.push(Energy_ratings_div.getElementsByTagName('input')[k].value);}
        }}
     // Condenser_coil Loop
     Condenser_coil_Array = [];
     if(Condenser_coil_div!==null){
     for(var k=0;k<Condenser_coil_div.getElementsByTagName('input').length;k++){
        if(Condenser_coil_div.getElementsByTagName('input')[k].checked){
        Condenser_coil_Array.push(Condenser_coil_div.getElementsByTagName('input')[k].value);}
        }}
      // Ideal_for Loop
     Ideal_for_Array = [];
     if(Ideal_for_div!==null){
     for(var k=0;k<Ideal_for_div.getElementsByTagName('input').length;k++){
        if(Ideal_for_div.getElementsByTagName('input')[k].checked){
        Ideal_for_Array.push(Ideal_for_div.getElementsByTagName('input')[k].value);}
        }}
     // Technology Loop
     Technology_Array = [];
     if(Technology_div!==null){
     for(var k=0;k<Technology_div.getElementsByTagName('input').length;k++){
        if(Technology_div.getElementsByTagName('input')[k].checked){
        Technology_Array.push(Technology_div.getElementsByTagName('input')[k].value);}
        }}
          // Defrosting_type Loop
     Defrosting_type_Array = [];
     if(Defrosting_type_div!==null){
     for(var k=0;k<Defrosting_type_div.getElementsByTagName('input').length;k++){
        if(Defrosting_type_div.getElementsByTagName('input')[k].checked){
        Defrosting_type_Array.push(Defrosting_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Year Loop
     Year_Array = [];
     if(Year_div!==null){
     for(var k=0;k<Year_div.getElementsByTagName('input').length;k++){
        if(Year_div.getElementsByTagName('input')[k].checked){
        Year_Array.push(Year_div.getElementsByTagName('input')[k].value);}
        }}
      // Star Loop
     Star_Array = [];
     if(Star_div!==null){
     for(var k=0;k<Star_div.getElementsByTagName('input').length;k++){
        if(Star_div.getElementsByTagName('input')[k].checked){
        Star_Array.push(Star_div.getElementsByTagName('input')[k].value);}
        }}
     // Bee_rating Loop
     Bee_rating_Array = [];
     if(Bee_rating_div!==null){
     for(var k=0;k<Bee_rating_div.getElementsByTagName('input').length;k++){
        if(Bee_rating_div.getElementsByTagName('input')[k].checked){
        Bee_rating_Array.push(Bee_rating_div.getElementsByTagName('input')[k].value);}
        }}
     // Washing_system Loop
     Washing_system_Array = [];
     if(Washing_system_div!==null){
     for(var k=0;k<Washing_system_div.getElementsByTagName('input').length;k++){
        if(Washing_system_div.getElementsByTagName('input')[k].checked){
        Washing_system_Array.push(Washing_system_div.getElementsByTagName('input')[k].value);}
        }}
     // Power Loop
     Power_Array = [];
     if(Power_div!==null){
     for(var k=0;k<Power_div.getElementsByTagName('input').length;k++){
        if(Power_div.getElementsByTagName('input')[k].checked){
        Power_Array.push(Power_div.getElementsByTagName('input')[k].value);}
        }}
      // Control Loop
     Control_Array = [];
     if(Control_div!==null){
     for(var k=0;k<Control_div.getElementsByTagName('input').length;k++){
        if(Control_div.getElementsByTagName('input')[k].checked){
        Control_Array.push(Control_div.getElementsByTagName('input')[k].value);}
        }}
     // Ductless Loop
     Ductless_Array = [];
     if(Ductless_div!==null){
     for(var k=0;k<Ductless_div.getElementsByTagName('input').length;k++){
        if(Ductless_div.getElementsByTagName('input')[k].checked){
        Ductless_Array.push(Ductless_div.getElementsByTagName('input')[k].value);}
        }}

          // Auto_clean Loop
     Auto_clean_Array = [];
     if(Auto_clean_div!==null){
     for(var k=0;k<Auto_clean_div.getElementsByTagName('input').length;k++){
        if(Auto_clean_div.getElementsByTagName('input')[k].checked){
        Auto_clean_Array.push(Auto_clean_div.getElementsByTagName('input')[k].value);}
        }}
     // Cups Loop
     Cups_Array = [];
     if(Cups_div!==null){
     for(var k=0;k<Cups_div.getElementsByTagName('input').length;k++){
        if(Cups_div.getElementsByTagName('input')[k].checked){
        Cups_Array.push(Cups_div.getElementsByTagName('input')[k].value);}
        }}
      // Number_of_eggs Loop
     Number_of_eggs_Array = [];
     if(Number_of_eggs_div!==null){
     for(var k=0;k<Number_of_eggs_div.getElementsByTagName('input').length;k++){
        if(Number_of_eggs_div.getElementsByTagName('input')[k].checked){
        Number_of_eggs_Array.push(Number_of_eggs_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_slices Loop
     Number_of_slices_Array = [];
     if(Number_of_slices_div!==null){
     for(var k=0;k<Number_of_slices_div.getElementsByTagName('input').length;k++){
        if(Number_of_slices_div.getElementsByTagName('input')[k].checked){
        Number_of_slices_Array.push(Number_of_slices_div.getElementsByTagName('input')[k].value);}
        }}
          // Screen_size Loop
     Screen_size_Array = [];
     if(Screen_size_div!==null){
     for(var k=0;k<Screen_size_div.getElementsByTagName('input').length;k++){
        if(Screen_size_div.getElementsByTagName('input')[k].checked){
        Screen_size_Array.push(Screen_size_div.getElementsByTagName('input')[k].value);}
        }}
     // Operating_system Loop
     Operating_system_Array = [];
     if(Operating_system_div!==null){
     for(var k=0;k<Operating_system_div.getElementsByTagName('input').length;k++){
        if(Operating_system_div.getElementsByTagName('input')[k].checked){
        Operating_system_Array.push(Operating_system_div.getElementsByTagName('input')[k].value);}
        }}
      // Hard_disk_capacity Loop
     Hard_disk_capacity_Array = [];
     if(Hard_disk_capacity_div!==null){
     for(var k=0;k<Hard_disk_capacity_div.getElementsByTagName('input').length;k++){
        if(Hard_disk_capacity_div.getElementsByTagName('input')[k].checked){
        Hard_disk_capacity_Array.push(Hard_disk_capacity_div.getElementsByTagName('input')[k].value);}
        }}
     // Storage_type Loop
     Storage_type_Array = [];
     if(Storage_type_div!==null){
     for(var k=0;k<Storage_type_div.getElementsByTagName('input').length;k++){
        if(Storage_type_div.getElementsByTagName('input')[k].checked){
        Storage_type_Array.push(Storage_type_div.getElementsByTagName('input')[k].value);}
        }}
          // Processor Loop
     Processor_Array = [];
     if(Processor_div!==null){
     for(var k=0;k<Processor_div.getElementsByTagName('input').length;k++){
        if(Processor_div.getElementsByTagName('input')[k].checked){
        Processor_Array.push(Processor_div.getElementsByTagName('input')[k].value);}
        }}
     // Processor_brand Loop
     Processor_brand_Array = [];
     if(Processor_brand_div!==null){
     for(var k=0;k<Processor_brand_div.getElementsByTagName('input').length;k++){
        if(Processor_brand_div.getElementsByTagName('input')[k].checked){
        Processor_brand_Array.push(Processor_brand_div.getElementsByTagName('input')[k].value);}
        }}
      // Processor_gen Loop
     Processor_gen_Array = [];
     if(Processor_gen_div!==null){
     for(var k=0;k<Processor_gen_div.getElementsByTagName('input').length;k++){
        if(Processor_gen_div.getElementsByTagName('input')[k].checked){
        Processor_gen_Array.push(Processor_gen_div.getElementsByTagName('input')[k].value);}
        }}
     // RAM_type Loop
     RAM_type_Array = [];
     if(RAM_type_div!==null){
     for(var k=0;k<RAM_type_div.getElementsByTagName('input').length;k++){
        if(RAM_type_div.getElementsByTagName('input')[k].checked){
        RAM_type_Array.push(RAM_type_div.getElementsByTagName('input')[k].value);}
        }}
          // RAM Loop
     RAM_Array = [];
     if(RAM_div!==null){
     for(var k=0;k<RAM_div.getElementsByTagName('input').length;k++){
        if(RAM_div.getElementsByTagName('input')[k].checked){
        RAM_Array.push(RAM_div.getElementsByTagName('input')[k].value);}
        }}
     // Graphics Loop
     Graphics_Array = [];
     if(Graphics_div!==null){
     for(var k=0;k<Graphics_div.getElementsByTagName('input').length;k++){
        if(Graphics_div.getElementsByTagName('input')[k].checked){
        Graphics_Array.push(Graphics_div.getElementsByTagName('input')[k].value);}
        }}
      // Graphics_name Loop
     Graphics_name_Array = [];
     if(Graphics_name_div!==null){
     for(var k=0;k<Graphics_name_div.getElementsByTagName('input').length;k++){
        if(Graphics_name_div.getElementsByTagName('input')[k].checked){
        Graphics_name_Array.push(Graphics_name_div.getElementsByTagName('input')[k].value);}
        }}
     // Graphics_processor_series Loop
     Graphics_processor_series_Array = [];
     if(Graphics_processor_series_div!==null){
     for(var k=0;k<Graphics_processor_series_div.getElementsByTagName('input').length;k++){
        if(Graphics_processor_series_div.getElementsByTagName('input')[k].checked){
        Graphics_processor_series_Array.push(Graphics_processor_series_div.getElementsByTagName('input')[k].value);}
        }}
          // Graphics_memory_type Loop
     Graphics_memory_type_Array = [];
     if(Graphics_memory_type_div!==null){
     for(var k=0;k<Graphics_memory_type_div.getElementsByTagName('input').length;k++){
        if(Graphics_memory_type_div.getElementsByTagName('input')[k].checked){
        Graphics_memory_type_Array.push(Graphics_memory_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Touch_screen Loop
     Touch_screen_Array = [];
     if(Touch_screen_div!==null){
     for(var k=0;k<Touch_screen_div.getElementsByTagName('input').length;k++){
        if(Touch_screen_div.getElementsByTagName('input')[k].checked){
        Touch_screen_Array.push(Touch_screen_div.getElementsByTagName('input')[k].value);}
        }}
      // Interface Loop
     Interface_Array = [];
     if(Interface_div!==null){
     for(var k=0;k<Interface_div.getElementsByTagName('input').length;k++){
        if(Interface_div.getElementsByTagName('input')[k].checked){
        Interface_Array.push(Interface_div.getElementsByTagName('input')[k].value);}
        }}
     // Water_proof Loop
     Water_proof_Array = [];
     if(Water_proof_div!==null){
     for(var k=0;k<Water_proof_div.getElementsByTagName('input').length;k++){
        if(Water_proof_div.getElementsByTagName('input')[k].checked){
        Water_proof_Array.push(Water_proof_div.getElementsByTagName('input')[k].value);}
        }}
          // Operation_type Loop
     Operation_type_Array = [];
     if(Operation_type_div!==null){
     for(var k=0;k<Operation_type_div.getElementsByTagName('input').length;k++){
        if(Operation_type_div.getElementsByTagName('input')[k].checked){
        Operation_type_Array.push(Operation_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_cells Loop
     Number_of_cells_Array = [];
     if(Number_of_cells_div!==null){
     for(var k=0;k<Number_of_cells_div.getElementsByTagName('input').length;k++){
        if(Number_of_cells_div.getElementsByTagName('input')[k].checked){
        Number_of_cells_Array.push(Number_of_cells_div.getElementsByTagName('input')[k].value);}
        }}
      // Compatible_laptop_size Loop
     Compatible_laptop_size_Array = [];
     if(Compatible_laptop_size_div!==null){
     for(var k=0;k<Compatible_laptop_size_div.getElementsByTagName('input').length;k++){
        if(Compatible_laptop_size_div.getElementsByTagName('input')[k].checked){
        Compatible_laptop_size_Array.push(Compatible_laptop_size_div.getElementsByTagName('input')[k].value);}
        }}
     // Ergonomic Loop
     Ergonomic_Array = [];
     if(Ergonomic_div!==null){
     for(var k=0;k<Ergonomic_div.getElementsByTagName('input').length;k++){
        if(Ergonomic_div.getElementsByTagName('input')[k].checked){
        Ergonomic_Array.push(Ergonomic_div.getElementsByTagName('input')[k].value);}
        }}
          // Illuminated_keys Loop
     Illuminated_keys_Array = [];
     if(Illuminated_keys_div!==null){
     for(var k=0;k<Illuminated_keys_div.getElementsByTagName('input').length;k++){
        if(Illuminated_keys_div.getElementsByTagName('input')[k].checked){
        Illuminated_keys_Array.push(Illuminated_keys_div.getElementsByTagName('input')[k].value);}
        }}
     // Shock_resistance Loop
     Shock_resistance_Array = [];
     if(Shock_resistance_div!==null){
     for(var k=0;k<Shock_resistance_div.getElementsByTagName('input').length;k++){
        if(Shock_resistance_div.getElementsByTagName('input')[k].checked){
        Shock_resistance_Array.push(Shock_resistance_div.getElementsByTagName('input')[k].value);}
        }}
      // Wireless_speed Loop
     Wireless_speed_Array = [];
     if(Wireless_speed_div!==null){
     for(var k=0;k<Wireless_speed_div.getElementsByTagName('input').length;k++){
        if(Wireless_speed_div.getElementsByTagName('input')[k].checked){
        Wireless_speed_Array.push(Wireless_speed_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_Ethernet_ports Loop
     Number_of_Ethernet_ports_Array = [];
     if(Number_of_Ethernet_ports_div!==null){
     for(var k=0;k<Number_of_Ethernet_ports_div.getElementsByTagName('input').length;k++){
        if(Number_of_Ethernet_ports_div.getElementsByTagName('input')[k].checked){
        Number_of_Ethernet_ports_Array.push(Number_of_Ethernet_ports_div.getElementsByTagName('input')[k].value);}
        }}
          // Transfer_speed Loop
     Transfer_speed_Array = [];
     if(Transfer_speed_div!==null){
     for(var k=0;k<Transfer_speed_div.getElementsByTagName('input').length;k++){
        if(Transfer_speed_div.getElementsByTagName('input')[k].checked){
        Transfer_speed_Array.push(Transfer_speed_div.getElementsByTagName('input')[k].value);}
        }}
     // Voice_support Loop
     Voice_support_Array = [];
     if(Voice_support_div!==null){
     for(var k=0;k<Voice_support_div.getElementsByTagName('input').length;k++){
        if(Voice_support_div.getElementsByTagName('input')[k].checked){
        Voice_support_Array.push(Voice_support_div.getElementsByTagName('input')[k].value);}
        }}
      // Memory_capacity Loop
     Memory_capacity_Array = [];
     if(Memory_capacity_div!==null){
     for(var k=0;k<Memory_capacity_div.getElementsByTagName('input').length;k++){
        if(Memory_capacity_div.getElementsByTagName('input')[k].checked){
        Memory_capacity_Array.push(Memory_capacity_div.getElementsByTagName('input')[k].value);}
        }}
     // Max_wireless_transmission_rate Loop
     Max_wireless_transmission_rate_Array = [];
     if(Max_wireless_transmission_rate_div!==null){
     for(var k=0;k<Max_wireless_transmission_rate_div.getElementsByTagName('input').length;k++){
        if(Max_wireless_transmission_rate_div.getElementsByTagName('input')[k].checked){
        Max_wireless_transmission_rate_Array.push(Max_wireless_transmission_rate_div.getElementsByTagName('input')[k].value);}
        }}
          // Frequency_band Loop
     Frequency_band_Array = [];
     if(Frequency_band_div!==null){
     for(var k=0;k<Frequency_band_div.getElementsByTagName('input').length;k++){
        if(Frequency_band_div.getElementsByTagName('input')[k].checked){
        Frequency_band_Array.push(Frequency_band_div.getElementsByTagName('input')[k].value);}
        }}
     // Compatibility Loop
     Compatibility_Array = [];
     if(Compatibility_div!==null){
     for(var k=0;k<Compatibility_div.getElementsByTagName('input').length;k++){
        if(Compatibility_div.getElementsByTagName('input')[k].checked){
        Compatibility_Array.push(Compatibility_div.getElementsByTagName('input')[k].value);}
        }}
      // Frequency Loop
     Frequency_Array = [];
     if(Frequency_div!==null){
     for(var k=0;k<Frequency_div.getElementsByTagName('input').length;k++){
        if(Frequency_div.getElementsByTagName('input')[k].checked){
        Frequency_Array.push(Frequency_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_USB_ports Loop
     Number_of_USB_ports_Array = [];
     if(Number_of_USB_ports_div!==null){
     for(var k=0;k<Number_of_USB_ports_div.getElementsByTagName('input').length;k++){
        if(Number_of_USB_ports_div.getElementsByTagName('input')[k].checked){
        Number_of_USB_ports_Array.push(Number_of_USB_ports_div.getElementsByTagName('input')[k].value);}
        }}
          // Antennae Loop
     Antennae_Array = [];
     if(Antennae_div!==null){
     for(var k=0;k<Antennae_div.getElementsByTagName('input').length;k++){
        if(Antennae_div.getElementsByTagName('input')[k].checked){
        Antennae_Array.push(Antennae_div.getElementsByTagName('input')[k].value);}
        }}
     // GST_invoice Loop
     GST_invoice_Array = [];
     if(GST_invoice_div!==null){
     for(var k=0;k<GST_invoice_div.getElementsByTagName('input').length;k++){
        if(GST_invoice_div.getElementsByTagName('input')[k].checked){
        GST_invoice_Array.push(GST_invoice_div.getElementsByTagName('input')[k].value);}
        }}
      // Offers Loop
     Offers_Array = [];
     if(Offers_div!==null){
     for(var k=0;k<Offers_div.getElementsByTagName('input').length;k++){
        if(Offers_div.getElementsByTagName('input')[k].checked){
        Offers_Array.push(Offers_div.getElementsByTagName('input')[k].value);}
        }}
     // Printer_type Loop
     Printer_type_Array = [];
     if(Printer_type_div!==null){
     for(var k=0;k<Printer_type_div.getElementsByTagName('input').length;k++){
        if(Printer_type_div.getElementsByTagName('input')[k].checked){
        Printer_type_Array.push(Printer_type_div.getElementsByTagName('input')[k].value);}
        }}
           // Scanner_type Loop
     Scanner_type_Array = [];
     if(Scanner_type_div!==null){
     for(var k=0;k<Scanner_type_div.getElementsByTagName('input').length;k++){
        if(Scanner_type_div.getElementsByTagName('input')[k].checked){
        Scanner_type_Array.push(Scanner_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Printer_output Loop
     Printer_output_Array = [];
     if(Printer_output_div!==null){
     for(var k=0;k<Printer_output_div.getElementsByTagName('input').length;k++){
        if(Printer_output_div.getElementsByTagName('input')[k].checked){
        Printer_output_Array.push(Printer_output_div.getElementsByTagName('input')[k].value);}
        }}
      // Refilling_type Loop
     Refilling_type_Array = [];
     if(Refilling_type_div!==null){
     for(var k=0;k<Refilling_type_div.getElementsByTagName('input').length;k++){
        if(Refilling_type_div.getElementsByTagName('input')[k].checked){
        Refilling_type_Array.push(Refilling_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Function Loop
     Function_Array = [];
     if(Function_div!==null){
     for(var k=0;k<Function_div.getElementsByTagName('input').length;k++){
        if(Function_div.getElementsByTagName('input')[k].checked){
        Function_Array.push(Function_div.getElementsByTagName('input')[k].value);}
        }}

          // Portable Loop
     Portable_Array = [];
     if(Portable_div!==null){
     for(var k=0;k<Portable_div.getElementsByTagName('input').length;k++){
        if(Portable_div.getElementsByTagName('input')[k].checked){
        Portable_Array.push(Portable_div.getElementsByTagName('input')[k].value);}
        }}
     // Device_chipset Loop
    Device_chipset_Array = [];
     if(Device_chipset_div!==null){
     for(var k=0;k<Device_chipset_div.getElementsByTagName('input').length;k++){
        if(Device_chipset_div.getElementsByTagName('input')[k].checked){
        Device_chipset_Array.push(Ornamentation_div.getElementsByTagName('input')[k].value);}
        }}
      // Lamp_life Loop
     Lamp_life_Array = [];
     if(Lamp_life_div!==null){
     for(var k=0;k<Lamp_life_div.getElementsByTagName('input').length;k++){
        if(Lamp_life_div.getElementsByTagName('input')[k].checked){
        Lamp_life_Array.push(Lamp_life_div.getElementsByTagName('input')[k].value);}
        }}
     // Brightness Loop
     Brightness_Array = [];
     if(Brightness_div!==null){
     for(var k=0;k<Brightness_div.getElementsByTagName('input').length;k++){
        if(Brightness_div.getElementsByTagName('input')[k].checked){
        Brightness_Array.push(Brightness_div.getElementsByTagName('input')[k].value);}
        }}
          // Edition Loop
     Edition_Array = [];
     if(Edition_div!==null){
     for(var k=0;k<Edition_div.getElementsByTagName('input').length;k++){
        if(Edition_div.getElementsByTagName('input')[k].checked){
        Edition_Array.push(Edition_div.getElementsByTagName('input')[k].value);}
        }}
     // Architecture Loop
     Architecture_Array = [];
     if(Architecture_div!==null){
     for(var k=0;k<Architecture_div.getElementsByTagName('input').length;k++){
        if(Architecture_div.getElementsByTagName('input')[k].checked){
        Architecture_Array.push(Architecture_div.getElementsByTagName('input')[k].value);}
        }}
      // Board Loop
     Board_Array = [];
     if(Board_div!==null){
     for(var k=0;k<Board_div.getElementsByTagName('input').length;k++){
        if(Board_div.getElementsByTagName('input')[k].checked){
        Board_Array.push(Board_div.getElementsByTagName('input')[k].value);}
        }}
     // Class Loop
     Class_Array = [];
     if(Class_div!==null){
     for(var k=0;k<Class_div.getElementsByTagName('input').length;k++){
        if(Class_div.getElementsByTagName('input')[k].checked){
        Class_Array.push(Class_div.getElementsByTagName('input')[k].value);}
        }}
          // Subject Loop
     Subject_Array = [];
     if(Subject_div!==null){
     for(var k=0;k<Subject_div.getElementsByTagName('input').length;k++){
        if(Subject_div.getElementsByTagName('input')[k].checked){
        Subject_Array.push(Subject_div.getElementsByTagName('input')[k].value);}
        }}
     // Validity Loop
     Validity_Array = [];
     if(Validity_div!==null){
     for(var k=0;k<Validity_div.getElementsByTagName('input').length;k++){
        if(Validity_div.getElementsByTagName('input')[k].checked){
        Validity_Array.push(Validity_div.getElementsByTagName('input')[k].value);}
        }}
      // Screen_resolution Loop
     Screen_resolution_Array = [];
     if(Screen_resolution_div!==null){
     for(var k=0;k<Screen_resolution_div.getElementsByTagName('input').length;k++){
        if(Screen_resolution_div.getElementsByTagName('input')[k].checked){
        Screen_resolution_Array.push(Screen_resolution_div.getElementsByTagName('input')[k].value);}
        }}
     // Screen_form_factor Loop
     Screen_form_factor_Array = [];
     if(Screen_form_factor_div!==null){
     for(var k=0;k<Screen_form_factor_div.getElementsByTagName('input').length;k++){
        if(Screen_form_factor_div.getElementsByTagName('input')[k].checked){
        Screen_form_factor_Array.push(Screen_form_factor_div.getElementsByTagName('input')[k].value);}
        }}
          // Inbuilt_speaker Loop
     Inbuilt_speaker_Array = [];
     if(Inbuilt_speaker_div!==null){
     for(var k=0;k<Inbuilt_speaker_div.getElementsByTagName('input').length;k++){
        if(Inbuilt_speaker_div.getElementsByTagName('input')[k].checked){
        Inbuilt_speaker_Array.push(Inbuilt_speaker_div.getElementsByTagName('input')[k].value);}
        }}
     // Panel_type Loop
     Panel_type_Array = [];
     if(Panel_type_div!==null){
     for(var k=0;k<Panel_type_div.getElementsByTagName('input').length;k++){
        if(Panel_type_div.getElementsByTagName('input')[k].checked){
        Panel_type_Array.push(Panel_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Connectivity Loop
     Connectivity_Array = [];
     if(Connectivity_div!==null){
     for(var k=0;k<Connectivity_div.getElementsByTagName('input').length;k++){
        if(Connectivity_div.getElementsByTagName('input')[k].checked){
        Connectivity_Array.push(Connectivity_div.getElementsByTagName('input')[k].value);}
        }}
     // Response_time Loop
     Response_time_Array = [];
     if(Response_time_div!==null){
     for(var k=0;k<Response_time_div.getElementsByTagName('input').length;k++){
        if(Response_time_div.getElementsByTagName('input')[k].checked){
        Response_time_Array.push(Response_time_div.getElementsByTagName('input')[k].value);}
        }}
          // Fan_diameter Loop
     Fan_diameter_Array = [];
     if(Fan_diameter_div!==null){
     for(var k=0;k<Fan_diameter_div.getElementsByTagName('input').length;k++){
        if(Fan_diameter_div.getElementsByTagName('input')[k].checked){
        Fan_diameter_Array.push(Fan_diameter_div.getElementsByTagName('input')[k].value);}
        }}
     // Max_fan_speed Loop
     Max_fan_speed_Array = [];
     if(Max_fan_speed_div!==null){
     for(var k=0;k<Max_fan_speed_div.getElementsByTagName('input').length;k++){
        if(Max_fan_speed_div.getElementsByTagName('input')[k].checked){
        Max_fan_speed_Array.push(Max_fan_speed_div.getElementsByTagName('input')[k].value);}
        }}
      // Number_of_satacables Loop
     Number_of_satacables_Array = [];
     if(Number_of_satacables_div!==null){
     for(var k=0;k<Number_of_satacables_div.getElementsByTagName('input').length;k++){
        if(Number_of_satacables_div.getElementsByTagName('input')[k].checked){
        Number_of_satacables_Array.push(Number_of_satacables_div.getElementsByTagName('input')[k].value);}
        }}
     // Power_output Loop
     Power_output_Array = [];
     if(Power_output_div!==null){
     for(var k=0;k<Power_output_div.getElementsByTagName('input').length;k++){
        if(Power_output_div.getElementsByTagName('input')[k].checked){
        Power_output_Array.push(Power_output_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_cores Loop
     Number_of_cores_Array = [];
     if(Number_of_cores_div!==null){
     for(var k=0;k<Number_of_cores_div.getElementsByTagName('input').length;k++){
        if(Number_of_cores_div.getElementsByTagName('input')[k].checked){
        Number_of_cores_Array.push(Number_of_cores_div.getElementsByTagName('input')[k].value);}
        }}
     // Processor_speed Loop
     Processor_speed_Array = [];
     if(Processor_speed_div!==null){
     for(var k=0;k<Processor_speed_div.getElementsByTagName('input').length;k++){
        if(Processor_speed_div.getElementsByTagName('input')[k].checked){
        Processor_speed_Array.push(Processor_speed_div.getElementsByTagName('input')[k].value);}
        }}
     // Data_rate Loop
     Data_rate_Array = [];
     if(Data_rate_div!==null){
     for(var k=0;k<Data_rate_div.getElementsByTagName('input').length;k++){
        if(Data_rate_div.getElementsByTagName('input')[k].checked){
        Data_rate_Array.push(Data_rate_div.getElementsByTagName('input')[k].value);}
        }}
     // Device Loop
     Device_Array = [];
     if(Device_div!==null){
     for(var k=0;k<Device_div.getElementsByTagName('input').length;k++){
        if(Device_div.getElementsByTagName('input')[k].checked){
        Device_Array.push(Device_div.getElementsByTagName('input')[k].value);}
        }}
     // Chipset Loop
     Chipset_Array = [];
     if(Chipset_div!==null){
     for(var k=0;k<Chipset_div.getElementsByTagName('input').length;k++){
        if(Chipset_div.getElementsByTagName('input')[k].checked){
        Chipset_Array.push(Chipset_div.getElementsByTagName('input')[k].value);}
        }}
     // Clock_speed Loop
     Clock_speed_Array = [];
     if(Clock_speed_div!==null){
     for(var k=0;k<Clock_speed_div.getElementsByTagName('input').length;k++){
        if(Clock_speed_div.getElementsByTagName('input')[k].checked){
        Clock_speed_Array.push(Clock_speed_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_HDMI_ports Loop
     Number_of_HDMI_ports_Array = [];
     if(Number_of_HDMI_ports_div!==null){
     for(var k=0;k<Number_of_HDMI_ports_div.getElementsByTagName('input').length;k++){
        if(Number_of_HDMI_ports_div.getElementsByTagName('input')[k].checked){
        Number_of_HDMI_ports_Array.push(Number_of_HDMI_ports_div.getElementsByTagName('input')[k].value);}
        }}
     // Configuration Loop
     Configuration_Array = [];
     if(Configuration_div!==null){
     for(var k=0;k<Configuration_div.getElementsByTagName('input').length;k++){
        if(Configuration_div.getElementsByTagName('input')[k].checked){
        Configuration_Array.push(Configuration_div.getElementsByTagName('input')[k].value);}
        }}
     // Smart_tv Loop
     Smart_tv_Array = [];
     if(Smart_tv_div!==null){
     for(var k=0;k<Smart_tv_div.getElementsByTagName('input').length;k++){
        if(Smart_tv_div.getElementsByTagName('input')[k].checked){
        Smart_tv_Array.push(Smart_tv_div.getElementsByTagName('input')[k].value);}
        }}
     // Screen_type Loop
     Screen_type_Array = [];
     if(Screen_type_div!==null){
     for(var k=0;k<Screen_type_div.getElementsByTagName('input').length;k++){
        if(Screen_type_div.getElementsByTagName('input')[k].checked){
        Screen_type_Array.push(Screen_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Curve_tv Loop
     Curve_tv_Array = [];
     if(Curve_tv_div!==null){
     for(var k=0;k<Curve_tv_div.getElementsByTagName('input').length;k++){
        if(Curve_tv_div.getElementsByTagName('input')[k].checked){
        Curve_tv_Array.push(Curve_tv_div.getElementsByTagName('input')[k].value);}
        }}
     // Internal_storage Loop
     Internal_storage_Array = [];
     if(Internal_storage_div!==null){
     for(var k=0;k<Internal_storage_div.getElementsByTagName('input').length;k++){
        if(Internal_storage_div.getElementsByTagName('input')[k].checked){
        Internal_storage_Array.push(Internal_storage_div.getElementsByTagName('input')[k].value);}
        }}
     // Battery_capacity Loop
     Battery_capacity_Array = [];
     if(Battery_capacity_div!==null){
     for(var k=0;k<Battery_capacity_div.getElementsByTagName('input').length;k++){
        if(Battery_capacity_div.getElementsByTagName('input')[k].checked){
        Battery_capacity_Array.push(Battery_capacity_div.getElementsByTagName('input')[k].value);}
        }}
     // Network_type Loop
     Network_type_Array = [];
     if(Network_type_div!==null){
     for(var k=0;k<Network_type_div.getElementsByTagName('input').length;k++){
        if(Network_type_div.getElementsByTagName('input')[k].checked){
        Network_typed_Array.push(Network_type_div.getElementsByTagName('input')[k].value);}
        }}
      // SIM_type Loop
     SIM_type_Array = [];
     if(SIM_type_div!==null){
     for(var k=0;k<SIM_type_div.getElementsByTagName('input').length;k++){
        if(SIM_type_div.getElementsByTagName('input')[k].checked){
        SIM_type_Array.push(SIM_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Primary_camera Loop
     Primary_camera_Array = [];
     if(Primary_camera_div!==null){
     for(var k=0;k<Primary_camera_div.getElementsByTagName('input').length;k++){
        if(Primary_camera_div.getElementsByTagName('input')[k].checked){
        Primary_camera_Array.push(Primary_camera_div.getElementsByTagName('input')[k].value);}
        }}
     // Secondary_camera Loop
     Secondary_camera_Array = [];
     if(Secondary_camera_div!==null){
     for(var k=0;k<Secondary_camera_div.getElementsByTagName('input').length;k++){
        if(Secondary_camera_div.getElementsByTagName('input')[k].checked){
        Secondary_camera_Array.push(Secondary_camera_div.getElementsByTagName('input')[k].value);}
        }}
      // Operating_system_name Loop
     Operating_system_name_Array = [];
     if(Operating_system_name_div!==null){
     for(var k=0;k<Operating_system_name_div.getElementsByTagName('input').length;k++){
        if(Operating_system_name_div.getElementsByTagName('input')[k].checked){
        Operating_system_name_Array.push(Operating_system_name_div.getElementsByTagName('input')[k].value);}
        }}
     // Speciality Loop
     Speciality_Array = [];
     if(Speciality_div!==null){
     for(var k=0;k<Speciality_div.getElementsByTagName('input').length;k++){
        if(Speciality_div.getElementsByTagName('input')[k].checked){
        Speciality_Array.push(Speciality_div.getElementsByTagName('input')[k].value);}
        }}
     // Voice_calling Loop
     Voice_calling_Array = [];
     if(Voice_calling_div!==null){
     for(var k=0;k<Voice_calling_div.getElementsByTagName('input').length;k++){
        if(Voice_calling_div.getElementsByTagName('input')[k].checked){
        Voice_calling_Array.push(Voice_calling_div.getElementsByTagName('input')[k].value);}
        }}
     // Battery_type Loop
     Battery_type_Array = [];
     if(Battery_type_div!==null){
     for(var k=0;k<Battery_type_div.getElementsByTagName('input').length;k++){
        if(Battery_type_div.getElementsByTagName('input')[k].checked){
        Battery_type_Array.push(Battery_type_div.getElementsByTagName('input')[k].value);}
        }}
      // Syncing_method Loop
     Syncing_method_Array = [];
     if(Syncing_method_div!==null){
     for(var k=0;k<Syncing_method_div.getElementsByTagName('input').length;k++){
        if(Syncing_method_div.getElementsByTagName('input')[k].checked){
        Syncing_method_Array.push(Syncing_method_div.getElementsByTagName('input')[k].value);}
        }}
      // Wireless_standard Loop
    Wireless_standard_Array = [];
     if(Wireless_standard_div!==null){
     for(var k=0;k<Wireless_standard_div.getElementsByTagName('input').length;k++){
        if(Wireless_standard_div.getElementsByTagName('input')[k].checked){
        Wireless_standard_Array.push(Wireless_standard_div.getElementsByTagName('input')[k].value);}
        }}
     // Indicator Loop
     Indicator_Array = [];
     if(Indicator_div!==null){
     for(var k=0;k<Indicator_div.getElementsByTagName('input').length;k++){
        if(Indicator_div.getElementsByTagName('input')[k].checked){
        Indicator_Array.push(Indicator_div.getElementsByTagName('input')[k].value);}
        }}
     // Compatible_mobile Loop
     Compatible_mobile_Array = [];
     if(Compatible_mobile_div!==null){
     for(var k=0;k<Compatible_mobile_div.getElementsByTagName('input').length;k++){
        if(Compatible_mobile_div.getElementsByTagName('input')[k].checked){
        Compatible_mobile_Array.push(Compatible_mobile_div.getElementsByTagName('input')[k].value);}
        }}
      // Extension Loop
     Extension_Array = [];
     if(Extension_div!==null){
     for(var k=0;k<Extension_div.getElementsByTagName('input').length;k++){
        if(Extension_div.getElementsByTagName('input')[k].checked){
        Extension_Array.push(Extension_div.getElementsByTagName('input')[k].value);}
        }}
     // Movement Loop
     Movement_Array = [];
     if(Movement_div!==null){
     for(var k=0;k<Movement_div.getElementsByTagName('input').length;k++){
        if(Movement_div.getElementsByTagName('input')[k].checked){
        Movement_Array.push(Movement_div.getElementsByTagName('input')[k].value);}
        }}
     // Fixture_type Loop
     Fixture_type_Array = [];
     if(Fixture_type_div!==null){
     for(var k=0;k<Fixture_type_div.getElementsByTagName('input').length;k++){
        if(Fixture_type_div.getElementsByTagName('input')[k].checked){
        Fixture_type_Array.push(Fixture_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Installation_type Loop
     Installation_type_Array = [];
     if(Installation_type_div!==null){
     for(var k=0;k<Installation_type_div.getElementsByTagName('input').length;k++){
        if(Installation_type_div.getElementsByTagName('input')[k].checked){
        Installation_type_Array.push(Installation_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Sweep_diameter Loop
     Sweep_diameter_Array = [];
     if(Sweep_diameter_div!==null){
     for(var k=0;k<Sweep_diameter_div.getElementsByTagName('input').length;k++){
        if(Sweep_diameter_div.getElementsByTagName('input')[k].checked){
        Sweep_diameter_Array.push(Sweep_diameter_div.getElementsByTagName('input')[k].value);}
        }}
     // Phase Loop
     Phase_Array = [];
     if(Phase_div!==null){
     for(var k=0;k<Phase_div.getElementsByTagName('input').length;k++){
        if(Phase_div.getElementsByTagName('input')[k].checked){
        Phase_Array.push(Phase_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_poles Loop
     Number_of_poles_Array = [];
     if(Number_of_poles_div!==null){
     for(var k=0;k<Number_of_poles_div.getElementsByTagName('input').length;k++){
        if(Number_of_poles_div.getElementsByTagName('input')[k].checked){
        Number_of_poles_Array.push(Number_of_poles_div.getElementsByTagName('input')[k].value);}
        }}
     // Flammable Loop
     Flammable_Array = [];
     if(Flammable_div!==null){
     for(var k=0;k<Flammable_div.getElementsByTagName('input').length;k++){
        if(Flammable_div.getElementsByTagName('input')[k].checked){
        Flammable_Array.push(Flammable_div.getElementsByTagName('input')[k].value);}
        }}
     // Sensor_type Loop
     Sensor_type_Array = [];
     if(Sensor_type_div!==null){
     for(var k=0;k<Sensor_type_div.getElementsByTagName('input').length;k++){
        if(Sensor_type_div.getElementsByTagName('input')[k].checked){
        Sensor_type_Array.push(Sensor_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Effective_pixels Loop
     Effective_pixels_Array = [];
     if(Effective_pixels_div!==null){
     for(var k=0;k<Effective_pixels_div.getElementsByTagName('input').length;k++){
        if(Effective_pixels_div.getElementsByTagName('input')[k].checked){
        Effective_pixels_Array.push(Effective_pixels_div.getElementsByTagName('input')[k].value);}
        }}
     // Maximum_load_capacity Loop
     Maximum_load_capacity_Array = [];
     if(Maximum_load_capacity_div!==null){
     for(var k=0;k<Maximum_load_capacity_div.getElementsByTagName('input').length;k++){
        if(Maximum_load_capacity_div.getElementsByTagName('input')[k].checked){
       Maximum_load_capacity_Array.push(Maximum_load_capacity_div.getElementsByTagName('input')[k].value);}
        }}
     // Prime_Zoom Loop
     Prime_Zoom_Array = [];
     if(Prime_Zoom_div!==null){
     for(var k=0;k<Prime_Zoom_div.getElementsByTagName('input').length;k++){
        if(Prime_Zoom_div.getElementsByTagName('input')[k].checked){
        Prime_Zoom_Array.push(Prime_Zoom_div.getElementsByTagName('input')[k].value);}
        }}
     // Focal_length Loop
     Focal_length_Array = [];
     if(Focal_length_div!==null){
     for(var k=0;k<Focal_length_div.getElementsByTagName('input').length;k++){
        if(Focal_length_div.getElementsByTagName('input')[k].checked){
        Focal_length_Array.push(Focal_length_div.getElementsByTagName('input')[k].value);}
        }}
      // Lens_type Loop
     Lens_type_Array = [];
     if(Lens_type_div!==null){
     for(var k=0;k<Lens_type_div.getElementsByTagName('input').length;k++){
        if(Lens_type_div.getElementsByTagName('input')[k].checked){
       Lens_type_Array.push(Lens_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Max_aperture Loop
     Max_aperture_Array = [];
     if(Max_aperture_div!==null){
     for(var k=0;k<Max_aperture_div.getElementsByTagName('input').length;k++){
        if(Max_aperture_div.getElementsByTagName('input')[k].checked){
        Max_aperture_Array.push(Max_aperture_div.getElementsByTagName('input')[k].value);}
        }}
     // Lens_mount Loop
     Lens_mount_Array = [];
     if(Lens_mount_div!==null){
     for(var k=0;k<Lens_mount_div.getElementsByTagName('input').length;k++){
        if(Lens_mount_div.getElementsByTagName('input')[k].checked){
        Lens_mount_Array.push(Lens_mount_div.getElementsByTagName('input')[k].value);}
        }}
     // Max_magnification Loop
     Max_magnification_Array = [];
     if(Max_magnification_div!==null){
     for(var k=0;k<Max_magnification_div.getElementsByTagName('input').length;k++){
        if(Max_magnification_div.getElementsByTagName('input')[k].checked){
        Max_magnification_Array.push(Max_magnification_div.getElementsByTagName('input')[k].value);}
        }}
     // Mount_tracking Loop
     Mount_tracking_Array = [];
     if(Mount_tracking_div!==null){
     for(var k=0;k<Mount_tracking_div.getElementsByTagName('input').length;k++){
        if(Mount_tracking_div.getElementsByTagName('input')[k].checked){
        Mount_tracking_Array.push(Mount_tracking_div.getElementsByTagName('input')[k].value);}
        }}
     // Placement_type Loop
     Placement_type_Array = [];
     if(Placement_type_div!==null){
     for(var k=0;k<Placement_type_div.getElementsByTagName('input').length;k++){
        if(Placement_type_div.getElementsByTagName('input')[k].checked){
        Placement_type_Array.push(Placement_type_div.getElementsByTagName('input')[k].value);}
        }}
     // Male_thread_diameter Loop
     Male_thread_diameter_Array = [];
     if(Male_thread_diameter_div!==null){
     for(var k=0;k<Male_thread_diameter.getElementsByTagName('input').length;k++){
        if(Male_thread_diameter_div.getElementsByTagName('input')[k].checked){
        Male_thread_diameter_Array.push(Male_thread_diameter_div.getElementsByTagName('input')[k].value);}
        }}
      // Female_thread_diameter Loop
     Female_thread_diameter_Array = [];
     if(Female_thread_diameter_div!==null){
     for(var k=0;k<Female_thread_diameter_div.getElementsByTagName('input').length;k++){
        if(Female_thread_diameter_div.getElementsByTagName('input')[k].checked){
        Female_thread_diameter_Array.push(Female_thread_diameter_div.getElementsByTagName('input')[k].value);}
        }}
     // Vehicle_brand Loop
     Vehicle_brand_Array = [];
     if(Vehicle_brand_div!==null){
     for(var k=0;k<Vehicle_brand_div.getElementsByTagName('input').length;k++){
        if(Vehicle_brand_div.getElementsByTagName('input')[k].checked){
        Vehicle_brand_Array.push(Vehicle_brand_div.getElementsByTagName('input')[k].value);}
        }}
     // Vehicle_model Loop
     Vehicle_model_Array = [];
     if(Vehicle_model_div!==null){
     for(var k=0;k<Vehicle_model_div.getElementsByTagName('input').length;k++){
        if(Vehicle_model_div.getElementsByTagName('input')[k].checked){
        Vehicle_model_Array.push(Vehicle_model_div.getElementsByTagName('input')[k].value);}
        }}
     // Number_of_indicator_lamps Loop
     Number_of_indicator_lamps_Array = [];
     if(Number_of_indicator_lamps_div!==null){
     for(var k=0;k<Number_of_indicator_lamps_div.getElementsByTagName('input').length;k++){
        if(Number_of_indicator_lamps_div.getElementsByTagName('input')[k].checked){
        Number_of_indicator_lamps_Array.push(Number_of_indicator_lamps_div.getElementsByTagName('input')[k].value);}
        }}
     // Tachometer Loop
     Tachometer_Array = [];
     if(Tachometer_div!==null){
     for(var k=0;k<Tachometer_div.getElementsByTagName('input').length;k++){
        if(Tachometer_div.getElementsByTagName('input')[k].checked){
        Tachometer_Array.push(Tachometer_div.getElementsByTagName('input')[k].value);}
        }}
     // Armours Loop
     Armours_Array = [];
     if(Armours_div!==null){
     for(var k=0;k<Armours_div.getElementsByTagName('input').length;k++){
        if(Armours_div.getElementsByTagName('input')[k].checked){
        Armours_Array.push(Armours_div.getElementsByTagName('input')[k].value);}
        }}
     // Platform Loop
     Platform_Array = [];
     if(Platform_div!==null){
     for(var k=0;k<Platform_div.getElementsByTagName('input').length;k++){
        if(Platform_div.getElementsByTagName('input')[k].checked){
        Platform_Array.push(Platform_div.getElementsByTagName('input')[k].value);}
        }}
     // PEGI_rating Loop
     PEGI_rating_Array = [];
     if(PEGI_rating_div!==null){
     for(var k=0;k<PEGI_rating_div.getElementsByTagName('input').length;k++){
        if(PEGI_rating_div.getElementsByTagName('input')[k].checked){
        PEGI_rating_Array.push(PEGI_rating_div.getElementsByTagName('input')[k].value);}
        }}
     // Game_modes Loop
     Game_modes_Array = [];
     if(Game_modes_div!==null){
     for(var k=0;k<Game_modes_div.getElementsByTagName('input').length;k++){
        if(Game_modes_div.getElementsByTagName('input')[k].checked){
        Game_modes_Array.push(Game_modes_div.getElementsByTagName('input')[k].value);}
        }}
     // ESRB_rating Loop
     ESRB_rating_Array = [];
     if(ESRB_rating_div!==null){
     for(var k=0;k<ESRB_rating_div.getElementsByTagName('input').length;k++){
        if(ESRB_rating_div.getElementsByTagName('input')[k].checked){
       ESRB_rating_Array.push(ESRB_rating_div.getElementsByTagName('input')[k].value);}
        }}
     // Temple_material Loop
     Temple_material_Array = [];
     if(Temple_material_div!==null){
     for(var k=0;k<Temple_material_div.getElementsByTagName('input').length;k++){
        if(Temple_material_div.getElementsByTagName('input')[k].checked){
        Temple_material_Array.push(Temple_material_div.getElementsByTagName('input')[k].value);}
        }}
     // Lens_type_supported Loop
     Lens_type_supported_Array = [];
     if(Lens_type_supported_div!==null){
     for(var k=0;k<Lens_type_supported_div.getElementsByTagName('input').length;k++){
        if(Lens_type_supported_div.getElementsByTagName('input')[k].checked){
        Lens_type_supported_Array.push(Lens_type_supported_div.getElementsByTagName('input')[k].value);}
        }}
     // Temple_color Loop
     Temple_color_Array = [];
     if(Temple_color_div!==null){
     for(var k=0;k<Temple_color_div.getElementsByTagName('input').length;k++){
        if(Temple_color_div.getElementsByTagName('input')[k].checked){
        Temple_color_Array.push(Temple_color_div.getElementsByTagName('input')[k].value);}
        }}

  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);

    //Brands
    var Brand_tam = 0;
    if(searchParams.get("next[2]")){
         Brand_tam = 1;
        }
    if(Brand_Array.length!==0 || Brand_tam===1){ // To remove unnecessary sets in the URL
    searchParams.set("next[2]", Brand_Array);
    }

    //Price
    Price_Array[0]=LowerPrice.value
    Price_Array[1]=UpperPrice.value
    searchParams.set("next[3]", Price_Array);

    //Colors
    var Color_tam = 0;
    if(searchParams.get("next[4]")){
         Color_tam = 1;
        }
    if(Color_Array.length!==0 || Color_tam===1){
    searchParams.set("next[4]",Color_Array);
    }

    // Fit
    var Fit_tam = 0;
    if(searchParams.get("next[6]")){
         Fit_tam = 1;
        }
    if(Fit_Array.length!==0 || Fit_tam === 1){
    searchParams.set("next[6]",Fit_Array);
    }

    // Pattern
    var Pattern_tam = 0;
    if(searchParams.get("next[7]")){
         Pattern_tam = 1;
        }
    if(Pattern_Array.length!==0 || Pattern_tam === 1){
    searchParams.set("next[7]",Pattern_Array);
    }

    // Neck_type
     var Neck_tam = 0;
    if(searchParams.get("next[8]")){
         Neck_tam = 1;
        }
    if(Neck_type_Array.length!==0 || Neck_tam === 1){
    searchParams.set("next[8]",Neck_type_Array);
    }

    // Sleeve_type
    var Sleeve_tam = 0;
    if(searchParams.get("next[9]") ){
         Sleeve_tam = 1;
        }
    if(Sleeve_type_Array.length!==0 || Sleeve_tam === 1){
    searchParams.set("next[9]",Sleeve_type_Array);
    }
    // Theme
     var Theme_tam = 0;
    if(searchParams.get("next[10]")){
         Theme_tam = 1;
        }
    if(Theme_Array.length!==0 || Theme_tam === 1){
    searchParams.set("next[10]",Theme_Array);
    }

    // Fabric
    var Fabric_tam = 0;
    if(searchParams.get("next[11]")){
         Fabric_tam = 1;
        }
    if(Fabric_Array.length!==0 || Fabric_tam === 1){
    searchParams.set("next[11]",Fabric_Array);
    }

    // Occasion
    var Occasion_tam = 0;
    if(searchParams.get("next[12]")){
         Occasion_tam = 1;
        }
    if(Occasion_Array.length!==0 || Occasion_tam === 1){
    searchParams.set("next[12]",Occasion_Array);
    }
    // Collar
    var Collar_tam = 0;
    if(searchParams.get("next[13]")){
         Collar_tam = 1;
        }
    if(Collar_Array.length!==0 || Collar_tam === 1){
    searchParams.set("next[13]",Collar_Array);
    }
    // type
    var type_tam = 0;
    if(searchParams.get("next[14]")){
         type_tam = 1;
        }
    if(type_Array.length!==0 || type_tam === 1){
    searchParams.set("next[14]",type_Array);
    }
    //Ratings
    let Rating;
    for(var k=0;k<ratings.length;k++){
        if(ratings[k].checked){
        Rating = ratings[k].value;}
        }
    searchParams.set("next[5]",Rating);

    // Distress
    var Distress_tam = 0;
    if(searchParams.get("next[15]")){
         Distress_tam = 1;
        }
    if(Distress_Array.length!==0 || Distress_tam === 1){
    searchParams.set("next[15]",Distress_Array);
    }
    // Fade
    var Fade_tam = 0;
    if(searchParams.get("next[16]")){
         Fade_tam = 1;
        }
    if(Fade_Array.length!==0 || Fade_tam === 1){
    searchParams.set("next[16]",Fade_Array);
    }
     // Waist Rise
    var Waist_rise_tam = 0;
    if(searchParams.get("next[17]")){
         Waist_rise_tam = 1;
        }
    if(Waist_rise_Array.length!==0 || Waist_rise_tam === 1){
    searchParams.set("next[17]",Waist_rise_Array);
    }
     // Heel Height
    var heel_height_tam = 0;
    if(searchParams.get("next[18]")){
         heel_height_tam = 1;
        }
    if(heel_height_Array.length!==0 || heel_height_tam === 1){
    searchParams.set("next[18]",heel_height_Array);
    }

     // Length
    var Length_tam = 0;
    if(searchParams.get("next[19]")){
         Length_tam = 1;
        }
    if(Length_Array.length!==0 || Length_tam === 1){
    searchParams.set("next[19]",Length_Array);
    }

    // Closure
    var Closure_tam = 0;
    if(searchParams.get("next[20]")){
         Closure_tam = 1;
        }
    if(Closure_Array.length!==0 || Closure_tam === 1){
    searchParams.set("next[20]",Closure_Array);
    }

    // Sleeve_style
    var Sleeve_style_tam = 0;
    if(searchParams.get("next[21]")){
         Sleeve_style_tam = 1;
        }
    if(Sleeve_style_Array.length!==0 || Sleeve_style_tam === 1){
    searchParams.set("next[21]",Sleeve_style_Array);
    }

    // usage
    var usage_tam = 0;
    if(searchParams.get("next[22]")){
         usage_tam = 1;
        }
    if(usage_Array.length!==0 || usage_tam === 1){
    searchParams.set("next[22]",usage_Array);
    }

    // Hooded
    var Hooded_tam = 0;
    if(searchParams.get("next[23]")){
         Hooded_tam = 1;
        }
    if(Hooded_Array.length!==0 || Hooded_tam === 1){
    searchParams.set("next[23]",Hooded_Array);
    }

    // Ornamentation
    var Ornamentation_tam = 0;
    if(searchParams.get("next[24]")){
         Ornamentation_tam = 1;
        }
    if(Ornamentation_Array.length!==0 || Ornamentation_tam === 1){
    searchParams.set("next[24]",Ornamentation_Array);
    }

    // Styling
    var Styling_tam = 0;
    if(searchParams.get("next[25]")){
         Styling_tam = 1;
        }
    if(Styling_Array.length!==0 || Styling_tam === 1){
    searchParams.set("next[25]",Styling_Array);
    }
    // Suitable_for
    var Suitable_for_tam = 0;
    if(searchParams.get("next[26]")){
         Suitable_for_tam = 1;
        }
    if(Suitable_for_Array.length!==0 || Suitable_for_tam === 1){
    searchParams.set("next[26]",Suitable_for_Array);
    }
    // Applied_for
    var Applied_for_tam = 0;
    if(searchParams.get("next[27]")){
         Applied_for_tam = 1;
        }
    if(Applied_for_Array.length!==0 || Applied_for_tam === 1){
    searchParams.set("next[27]",Applied_for_Array);
    }
    // Hair_type
    var Hair_type_tam = 0;
    if(searchParams.get("next[28]")){
         Hair_type_tam = 1;
        }
    if(Hair_type_Array.length!==0 || Hair_type_tam === 1){
    searchParams.set("next[28]",Hair_type_Array);
    }
    // Pack_of
    var Pack_of_tam = 0;
    if(searchParams.get("next[29]")){
         Pack_of_tam = 1;
        }
    if(Pack_of_Array.length!==0 || Pack_of_tam === 1){
    searchParams.set("next[29]",Pack_of_Array);
    }
    // Washable
    var Washable_tam = 0;
    if(searchParams.get("next[30]")){
         Washable_tam = 1;
        }
    if(Washable_Array.length!==0 || Washable_tam === 1){
    searchParams.set("next[30]",Washable_Array);
    }
    // Water_resistance
    var Water_resistance_tam = 0;
    if(searchParams.get("next[31]")){
         Water_resistance_tam = 1;
        }
    if(Water_resistance_Array.length!==0 || Water_resistance_tam === 1){
    searchParams.set("next[31]",Water_resistance_Array);
    }
    // Rise
    var Rise_tam = 0;
    if(searchParams.get("next[32]")){
         Rise_tam = 1;
        }
    if(Rise_Array.length!==0 || Rise_tam === 1){
    searchParams.set("next[32]",Rise_Array);
    }
    // Straps
    var Straps_tam = 0;
    if(searchParams.get("next[33]")){
         Straps_tam = 1;
        }
    if(Straps_Array.length!==0 || Straps_tam === 1){
    searchParams.set("next[33]",Straps_Array);
    }
    // Wire_support
    var Wire_support_tam = 0;
    if(searchParams.get("next[34]")){
         Wire_support_tam = 1;
        }
    if(Wire_support_Array.length!==0 || Wire_support_tam === 1){
    searchParams.set("next[34]",Wire_support_Array);
    }
    // Padding
    var Padding_tam = 0;
    if(searchParams.get("next[35]")){
         Padding_tam = 1;
        }
    if(Padding_Array.length!==0 || Padding_tam === 1){
    searchParams.set("next[35]",Padding_Array);
    }
    // Seam
    var Seam_tam = 0;
    if(searchParams.get("next[36]")){
         Seam_tam = 1;
        }
    if(Seam_Array.length!==0 || Seam_tam === 1){
    searchParams.set("next[36]",Seam_Array);
    }
    // Coverage
    var Coverage_tam = 0;
    if(searchParams.get("next[37]")){
         Coverage_tam = 1;
        }
    if(Coverage_Array.length!==0 || Coverage_tam === 1){
    searchParams.set("next[37]",Coverage_Array);
    }

    // Back_style
    var Back_style_tam = 0;
    if(searchParams.get("next[38]")){
         Back_style_tam = 1;
        }
    if(Back_style_Array.length!==0 || Back_style_tam === 1){
    searchParams.set("next[38]",Back_style_Array);
    }
    // Dial_color
    var Dial_color_tam = 0 ;
    if(searchParams.get("next[39]")){
         Dial_color_tam = 1;
        }
    if(Dial_color_Array.length!==0 || Dial_color_tam === 1){
    searchParams.set("next[39]",Dial_color_Array);
    }
    // Features
    var Features_tam = 0;
    if(searchParams.get("next[40]")){
         Features_tam = 1;
        }
    if(Features_Array.length!==0 || Features_tam === 1){
    searchParams.set("next[40]",Features_Array);
    }
    // Dial_shape
    var Dial_shape_tam = 0;
    if(searchParams.get("next[41]")){
         Dial_shape_tam = 1;
        }
    if(Dial_shape_Array.length!==0 || Dial_shape_tam === 1){
    searchParams.set("next[41]",Dial_shape_Array);
    }
    // Strap_material
    var Strap_material_tam = 0;
    if(searchParams.get("next[42]")){
         Strap_material_tam = 1;
        }
    if(Strap_material_Array.length!==0 || Strap_material_tam === 1){
    searchParams.set("next[42]",Strap_material_Array);
    }
    // Number_of_compartments
    var Number_of_compartments_tam = 0;
    if(searchParams.get("next[43]")){
         Number_of_compartments_tam = 1;
        }
    if(Number_of_compartments_Array.length!==0 || Number_of_compartments_tam === 1){
    searchParams.set("next[43]",Number_of_compartments_Array);
    }
    // Material
    var Material_tam = 0;
    if(searchParams.get("next[44]")){
         Material_tam = 1;
        }
    if(Material_Array.length!==0 || Material_tam === 1){
    searchParams.set("next[44]",Material_Array);
    }
    // Bag_size
    var Bag_size_tam = 0;
    if(searchParams.get("next[45]")){
         Bag_size_tam = 1;
        }
    if(Bag_size_Array.length!==0 || Bag_size_tam === 1){
    searchParams.set("next[45]",Bag_size_Array);
    }
    // wheels
    var wheels_tam = 0;
    if(searchParams.get("next[46]")){
         wheels_tam = 1;
        }
    if(wheels_Array.length!==0 || wheels_tam === 1){
    searchParams.set("next[46]",wheels_Array);
    }
    // body_type
    var body_type_tam = 0;
    if(searchParams.get("next[47]")){
         body_type_tam = 1;
        }
    if(body_type_Array.length!==0 || body_type_tam === 1){
    searchParams.set("next[47]",body_type_Array);
    }
    // capacity
    var capacity_tam = 0;
    if(searchParams.get("next[48]")){
         capacity_tam = 1;
        }
    if(capacity_Array.length!==0 || capacity_tam === 1){
    searchParams.set("next[48]",capacity_Array);
    }
    // card_slot
    var card_slot_tam = 0;
    if(searchParams.get("next[49]")){
         card_slot_tam = 1;
        }
    if(card_slot_Array.length!==0 || card_slot_tam === 1){
    searchParams.set("next[49]",card_slot_Array);
    }
    // Strap_color
    var Strap_color_tam = 0;
    if(searchParams.get("next[50]")){
         Strap_color_tam = 1;
        }
    if(Strap_color_Array.length!==0 || Strap_color_tam === 1){
    searchParams.set("next[50]",Strap_color_Array);
    }
    // Compatible_OS
    var Compatible_OS_tam = 0;
    if(searchParams.get("next[51]")){
         Compatible_OS_tam = 1;
        }
    if(Compatible_OS_Array.length!==0 || Compatible_OS_tam === 1){
    searchParams.set("next[51]",Compatible_OS_Array);
    }
    // Display_type
    var Display_type_tam = 0;
    if(searchParams.get("next[52]")){
         Display_type_tam = 1;
        }
    if(Display_type_Array.length!==0 || Display_type_tam === 1){
    searchParams.set("next[52]",Display_type_Array);
    }
    // Gemstones
    var Gemstones_tam = 0;
    if(searchParams.get("next[53]")){
         Gemstones_tam = 1;
        }
    if(Gemstones_Array.length!==0 || Gemstones_tam === 1){
    searchParams.set("next[53]",Gemstones_Array);
    }
    // Gender
    var Gender_tam = 0;
    if(searchParams.get("next[54]")){
         Gender_tam = 1;
        }
    if(Gender_Array.length!==0 || Gender_tam === 1){
    searchParams.set("next[54]",Gender_Array);
    }
    // Blade_material
    var Blade_material_tam = 0;
    if(searchParams.get("next[55]")){
         Blade_material_tam = 1;
        }
    if(Blade_material_Array.length!==0 || Blade_material_tam === 1){
    searchParams.set("next[55]",Blade_material_Array);
    }
    // Battery_run_time
    var Battery_run_time_tam = 0;
    if(searchParams.get("next[56]")){
         Battery_run_time_tam = 1;
        }
    if(Battery_run_time_Array.length!==0 || Battery_run_time_tam === 1){
    searchParams.set("next[56]",Battery_run_time_Array);
    }
    // Body_material
    var Body_material_tam = 0;
    if(searchParams.get("next[57]")){
         Body_material_tam = 1;
        }
    if(Body_material_Array.length!==0 ||Body_material_tam === 1){
    searchParams.set("next[57]",Body_material_Array);
    }
    // Plate_coating
    var Plate_coating_tam = 0;
    if(searchParams.get("next[58]")){
         Plate_coating_tam = 1;
        }
    if(Plate_coating_Array.length!==0 || Plate_coating_tam === 1){
    searchParams.set("next[58]",Plate_coating_Array);
    }
    // Wattage
    var Wattage_tam = 0;
    if(searchParams.get("next[59]")){
         Wattage_tam = 1;
        }
    if(Wattage_Array.length!==0 || Wattage_tam === 1){
    searchParams.set("next[59]",Wattage_Array);
    }
    // Collection
    var Collection_tam = 0;
    if(searchParams.get("next[60]")){
        Collection_tam = 1;
        }
    if(Collection_Array.length!==0 || Collection_tam === 1){
    searchParams.set("next[60]",Collection_Array);
    }
    // Ring_size
    var Ring_size_tam = 0;
    if(searchParams.get("next[61]")){
         Ring_size_tam = 1;
        }
    if(Ring_size_Array.length!==0 || Ring_size_tam === 1){
    searchParams.set("next[61]",Ring_size_Array);
    }
    // Dress_length
    var Dress_length_tam = 0;
    if(searchParams.get("next[62]")){
         Dress_length_tam = 1;
        }
    if(Dress_length_Array.length!==0 || Dress_length_tam === 1){
    searchParams.set("next[62]",Dress_length_Array);
    }
    // Length_type
    var Length_type_tam = 0;
    if(searchParams.get("next[63]")){
         Length_type_tam = 1;
        }
    if(Length_type_Array.length!==0 || Length_type_tam === 1){
    searchParams.set("next[63]",Length_type_Array);
    }
    // Saree_type
    var Saree_type_tam = 0;
    if(searchParams.get("next[64]")){
         Saree_type_tam = 1;
        }
    if(Saree_type_Array.length!==0 || Saree_type_tam === 1){
    searchParams.set("next[64]",Saree_type_Array);
    }
    // Saree_style
    var Saree_style_tam = 0;
    if(searchParams.get("next[65]")){
         Saree_style_tam = 1;
        }
    if(Saree_style_Array.length!==0 || Saree_style_tam === 1){
    searchParams.set("next[65]",Saree_style_Array);
    }
    // Saree_length
    var Saree_length_tam = 0;
    if(searchParams.get("next[66]")){
         Saree_length_tam = 1;
        }
    if(Saree_length_Array.length!==0 || Saree_length_tam === 1){
    searchParams.set("next[66]",Saree_length_Array);
    }
    // Blouse_included
    var Blouse_included_tam = 0;
    if(searchParams.get("next[67]")){
         Blouse_included_tam = 1;
        }
    if(Blouse_included_Array.length!==0 || Blouse_included_tam === 1){
    searchParams.set("next[67]",Blouse_included_Array);
    }
    // Saree_Fall_length
    var Saree_Fall_length_tam = 0;
    if(searchParams.get("next[68]")){
         Saree_Fall_length_tam = 1;
        }
    if(Saree_Fall_length_Array.length!==0 || Saree_Fall_length_tam === 1){
    searchParams.set("next[68]",Saree_Fall_length_Array);
    }
    // Saree_Fall_width
    var Saree_Fall_width_tam = 0;
    if(searchParams.get("next[69]")){
         Saree_Fall_width_tam = 1;
        }
    if(Saree_Fall_width_Array.length!==0 || Saree_Fall_width_tam === 1){
    searchParams.set("next[69]",Saree_Fall_width_Array);
    }
    // Dupatta_included
    var Dupatta_included_tam = 0;
    if(searchParams.get("next[70]")){
         Dupatta_included_tam = 1;
        }
    if(Dupatta_included_Array.length!==0 || Dupatta_included_tam === 1){
    searchParams.set("next[70]",Dupatta_included_Array);
    }
    // Rechargeable
    var Rechargeable_tam = 0;
    if(searchParams.get("next[71]")){
         Rechargeable_tam = 1;
        }
    if(Rechargeable_Array.length!==0 || Rechargeable_tam === 1){
    searchParams.set("next[71]",Rechargeable_Array);
    }
    // Battery_operated
    var Battery_operated_tam = 0;
    if(searchParams.get("next[72]")){
         Battery_operated_tam = 1;
        }
    if(Battery_operated_Array.length!==0 || Battery_operated_tam === 1){
    searchParams.set("next[72]",Battery_operated_Array);
    }
    // Character
    var Character_tam = 0;
    if(searchParams.get("next[73]")){
         Character_tam = 1;
        }
    if(Character_Array.length!==0 || Character_tam === 1){
    searchParams.set("next[73]",Character_Array);
    }
    // Thermoware
    var Thermoware_tam = 0;
    if(searchParams.get("next[74]")){
         Thermoware_tam = 1;
        }
    if(Thermoware_Array.length!==0 || Thermoware_tam === 1){
    searchParams.set("next[74]",Thermoware_Array);
    }
    // Age_group
    var Age_group_tam = 0;
    if(searchParams.get("next[75]")){
         Age_group_tam = 1;
        }
    if(Age_group_Array.length!==0 || Age_group_tam === 1){
    searchParams.set("next[75]",Age_group_Array);
    }
    // Pot_included
    var Pot_included_tam = 0;
    if(searchParams.get("next[76]")){
         Pot_included_tam = 1;
        }
    if(Pot_included_Array.length!==0 || Pot_included_tam === 1){
    searchParams.set("next[76]",Pot_included_Array);
    }
    // Bonsai
    var Bonsai_tam = 0;
    if(searchParams.get("next[77]")){
         Bonsai_tam = 1;
        }
    if(Bonsai_Array.length!==0 || Bonsai_tam === 1){
    searchParams.set("next[77]",Bonsai_Array);
    }
    // Outer_material
    var Outer_material_tam = 0;
    if(searchParams.get("next[78]")){
         Outer_material_tam = 1;
        }
    if(Outer_material_Array.length!==0 || Outer_material_tam === 1){
    searchParams.set("next[78]",Outer_material_Array);
    }
    // Towel_type
    var Towel_type_tam = 0;
    if(searchParams.get("next[79]")){
         Towel_type_tam = 1;
        }
    if(Towel_type_Array.length!==0 || Towel_type_tam === 1){
    searchParams.set("next[79]",Towel_type_Array);
    }
    // Reversible
    var Reversible_tam = 0;
    if(searchParams.get("next[80]")){
         Reversible_tam = 1;
        }
    if(Reversible_Array.length!==0 || Reversible_tam === 1){
    searchParams.set("next[80]",Reversible_Array);
    }
    // width
    var width_tam = 0;
    if(searchParams.get("next[81]")){
         width_tam = 1;
        }
    if(width_Array.length!==0 || width_tam === 1){
    searchParams.set("next[81]",width_Array);
    }
    // Shape
    var Shape_tam = 0;
    if(searchParams.get("next[82]")){
         Shape_tam = 1;
        }
    if(Shape_Array.length!==0 || Shape_tam === 1){
    searchParams.set("next[82]",Shape_Array);
    }
    // Microwave_safe
    var Microwave_safe_tam = 0;
    if(searchParams.get("next[83]")){
         Microwave_safe_tam = 1;
        }
    if(Microwave_safe_Array.length!==0 || Microwave_safe_tam === 1){
    searchParams.set("next[83]",Microwave_safe_Array);
    }
    // Showpiece_type
    var Showpiece_type_tam = 0;
    if(searchParams.get("next[84]")){
         Showpiece_type_tam = 1;
        }
    if(Showpiece_type_Array.length!==0 || Showpiece_type_tam === 1){
    searchParams.set("next[84]",Showpiece_type_Array);
    }
    // No_of_prongs
    var No_of_prongs_tam = 0;
    if(searchParams.get("next[85]")){
         No_of_prongs_tam = 1;
        }
    if(No_of_prongs_Array.length!==0 || No_of_prongs_tam === 1){
    searchParams.set("next[85]",No_of_prongs_Array);
    }
    // Fragrance
    var Fragrance_tam = 0;
    if(searchParams.get("next[86]")){
         Fragrance_tam = 1;
        }
    if(Fragrance_Array.length!==0 || Fragrance_tam === 1){
    searchParams.set("next[86]",Fragrance_Array);
    }
    // Quantity
    var Quantity_tam = 0;
    if(searchParams.get("next[87]")){
         Quantity_tam = 1;
        }
    if(Quantity_Array.length!==0 || Quantity_tam === 1){
    searchParams.set("next[87]",Quantity_Array);
    }
    // Form
    var Form_tam = 0;
    if(searchParams.get("next[88]")){
         Form_tam = 1;
        }
    if(Form_Array.length!==0 || Form_tam === 1){
    searchParams.set("next[88]",Form_Array);
    }
    // Light_used
    var Light_used_tam = 0;
    if(searchParams.get("next[89]")){
         Light_used_tam = 1;
        }
    if(Light_used_Array.length!==0 || Light_used_tam === 1){
    searchParams.set("next[89]",Light_used_Array);
    }
    // adjustable
    var adjustable_tam = 0;
    if(searchParams.get("next[90]")){
         adjustable_tam = 1;
        }
    if(adjustable_Array.length!==0 || adjustable_tam === 1){
    searchParams.set("next[90]",adjustable_Array);
    }
    // Mount_type
    var Mount_type_tam = 0;
    if(searchParams.get("next[91]")){
         Mount_type_tam = 1;
        }
    if(Mount_type_Array.length!==0 || Mount_type_tam === 1){
    searchParams.set("next[91]",Mount_type_Array);
    }
    // Bulb_included
    var Bulb_included_tam = 0;
    if(searchParams.get("next[92]")){
         Bulb_included_tam = 1;
        }
    if(Bulb_included_Array.length!==0 || Bulb_included_tam === 1){
    searchParams.set("next[92]",Bulb_included_Array);
    }
    // Dimmable
    var Dimmable_tam = 0;
    if(searchParams.get("next[93]")){
         Dimmable_tam = 1;
        }
    if(Dimmable_Array.length!==0 || Dimmable_tam === 1){
    searchParams.set("next[93]",Dimmable_Array);
    }
    // Foldable
    var Foldable_tam = 0;
    if(searchParams.get("next[94]")){
         Foldable_tam = 1;
        }
    if(Foldable_Array.length!==0 || Foldable_tam === 1){
    searchParams.set("next[94]",Ornamentation_Array);
    }
    // Adjustable_height
    var Adjustable_height_tam = 0;
    if(searchParams.get("next[95]")){
         Adjustable_height_tam = 1;
        }
    if(Adjustable_height_Array.length!==0 || Adjustable_height_tam === 1){
    searchParams.set("next[95]",Adjustable_height_Array);
    }
    // Mouse_tray
    var Mouse_tray_tam = 0;
    if(searchParams.get("next[96]")){
         Mouse_tray_tam = 1;
        }
    if(Mouse_tray_Array.length!==0 || Mouse_tray_tam === 1){
    searchParams.set("next[96]",Mouse_tray_Array);
    }
    // Height
    var Height_tam = 0;
    if(searchParams.get("next[97]")){
         Height_tam = 1;
        }
    if(Height_Array.length!==0 || Height_tam === 1){
    searchParams.set("next[97]",Height_Array);
    }
    // Storage_included
    var Storage_included_tam = 0;
    if(searchParams.get("next[98]")){
         Storage_included_tam = 1;
        }
    if(Storage_included_Array.length!==0 || Storage_included_tam === 1){
    searchParams.set("next[98]",Storage_included_Array);
    }
    // Separated
    var Separated_tam = 0;
    if(searchParams.get("next[99]")){
         Separated_tam = 1;
        }
    if(Separated_Array.length!==0 || Separated_tam === 1){
    searchParams.set("next[99]",Separated_Array);
    }
    // Weight
    var Weight_tam = 0;
    if(searchParams.get("next[100]")){
         Weight_tam = 1;
        }
    if(Weight_Array.length!==0 || Weight_tam === 1){
    searchParams.set("next[100]",Weight_Array);
    }
    // Heart_rate_sensor
    var Heart_rate_sensor_tam = 0;
    if(searchParams.get("next[101]")){
        Heart_rate_sensor_tam = 1;
        }
    if(Heart_rate_sensor_Array.length!==0 || Heart_rate_sensor_tam === 1){
    searchParams.set("next[101]",Heart_rate_sensor_Array);
    }
    // Design
    var Design_tam = 0;
    if(searchParams.get("next[102]")){
         Design_tam = 1;
        }
    if(Design_Array.length!==0 || Design_tam === 1){
    searchParams.set("next[102]",Design_Array);
    }
    // Diameter
    var Diameter_tam = 0;
    if(searchParams.get("next[103]")){
         Diameter_tam = 1;
        }
    if(Diameter_Array.length!==0 || Diameter_tam === 1){
    searchParams.set("next[103]",Diameter_Array);
    }
    // Contains_pump
    var Contains_pump_tam = 0;
    if(searchParams.get("next[104]")){
         Contains_pump_tam = 1;
        }
    if(Contains_pump_Array.length!==0 || Contains_pump_tam === 1){
    searchParams.set("next[104]",Contains_pump_Array);
    }
    // Thickness
    var Thickness_tam = 0;
    if(searchParams.get("next[105]")){
         Thickness_tam = 1;
        }
    if(Thickness_Array.length!==0 || Thickness_tam === 1){
    searchParams.set("next[105]",Thickness_Array);
    }
    // Grip
    var Grip_tam = 0;
    if(searchParams.get("next[106]")){
         Grip_tam = 1;
        }
    if(Grip_Array.length!==0 || Grip_tam === 1){
    searchParams.set("next[106]",Grip_Array);
    }
    // Playing_level
    var Playing_level_tam = 0;
    if(searchParams.get("next[107]")){
         Playing_level_tam = 1;
        }
    if(Playing_level_Array.length!==0 || Playing_level_tam === 1){
    searchParams.set("next[107]",Playing_level_Array);
    }
    // Strung_type
    var Strung_type_tam = 0;
    if(searchParams.get("next[108]")){
         Strung_type_tam = 1;
        }
    if(Strung_type_Array.length!==0 || Strung_type_tam === 1){
    searchParams.set("next[108]",Strung_type_Array);
    }
    // Cover_type
    var Cover_type_tam = 0;
    if(searchParams.get("next[109]")){
         Cover_type_tam = 1;
        }
    if(Cover_type_Array.length!==0 || Cover_type_tam === 1){
    searchParams.set("next[109]",Cover_type_Array);
    }
    // Grip_size
    var Grip_size_tam = 0;
    if(searchParams.get("next[110]")){
         Grip_size_tam = 1;
        }
    if(Grip_size_Array.length!==0 || Grip_size_tam === 1){
    searchParams.set("next[110]",Grip_size_Array);
    }
    // Head_size
    var Head_size_tam = 0;
    if(searchParams.get("next[111]")){
         Head_size_tam = 1;
        }
    if(Head_size_Array.length!==0 || Head_size_tam === 1){
    searchParams.set("next[111]",Head_size_Array);
    }
    // Speed
    var Speed_tam = 0;
    if(searchParams.get("next[112]")){
         Speed_tam = 1;
        }
    if(Speed_Array.length!==0 || Speed_tam === 1){
    searchParams.set("next[112]",Speed_Array);
    }
    // Willow_type
    var Willow_type_tam = 0;
    if(searchParams.get("next[113]")){
         Willow_type_tam = 1;
        }
    if(Willow_type_Array.length!==0 || Willow_type_tam === 1){
    searchParams.set("next[113]",Willow_type_Array);
    }
    // Bat_grade
    var Bat_grade_tam = 0;
    if(searchParams.get("next[114]")){
         Bat_grade_tam = 1;
        }
    if(Bat_grade_Array.length!==0 || Bat_grade_tam === 1){
    searchParams.set("next[114]",Bat_grade_Array);
    }
    // Cover
    var Cover_tam = 0;
    if(searchParams.get("next[115]")){
         Cover_tam = 1;
        }
    if(Cover_Array.length!==0 || Cover_tam === 1){
    searchParams.set("next[115]",Cover_Array);
    }
    // Visor
    var Visor_tam = 0;
    if(searchParams.get("next[116]")){
         Visor_tam = 1;
        }
    if(Visor_Array.length!==0 || Visor_tam === 1){
    searchParams.set("next[116]",Visor_Array);
    }
    // Bails_included
    var Bails_included_tam = 0;
    if(searchParams.get("next[117]")){
         Bails_included_tam = 1;
        }
    if(Bails_included_Array.length!==0 || Bails_included_tam === 1){
    searchParams.set("next[117]",Bails_included_Array);
    }
    // Fill_type
    var Fill_type_tam = 0;
    if(searchParams.get("next[118]")){
         Fill_type_tam = 1;
        }
    if(Fill_type_Array.length!==0 || Fill_type_tam === 1){
    searchParams.set("next[118]",Fill_type_Array);
    }
    // Tyre_size
    var Tyre_size_tam = 0;
    if(searchParams.get("next[119]")){
         Tyre_size_tam = 1;
        }
    if(Tyre_size_Array.length!==0 || Tyre_size_tam === 1){
    searchParams.set("next[119]",Tyre_size_Array);
    }
    // Gear_type
    var Gear_type_tam = 0;
    if(searchParams.get("next[120]")){
         Gear_type_tam = 1;
        }
    if(Gear_type_Array.length!==0 || Gear_type_tam === 1){
    searchParams.set("next[120]",Gear_type_Array);
    }
    // Rear_brake
    var Rear_brake_tam = 0;
    if(searchParams.get("next[121]")){
         Rear_brake_tam = 1;
        }
    if(Rear_brake_Array.length!==0 || Rear_brake_tam === 1){
    searchParams.set("next[121]",Rear_brake_Array);
    }
    // Front_brake
    var Front_brake_tam = 0;
    if(searchParams.get("next[122]")){
         Front_brake_tam = 1;
        }
    if(Front_brake_Array.length!==0 || Front_brake_tam === 1){
    searchParams.set("next[122]",Front_brake_Array);
    }
    // Playback_mode
    var Playback_mode_tam = 0;
    if(searchParams.get("next[123]")){
         Playback_mode_tam = 1;
        }
    if(Playback_mode_Array.length!==0 || Playback_mode_tam === 1){
    searchParams.set("next[123]",Playback_mode_Array);
    }
    // Accessory_holder
    var Accessory_holder_tam = 0;
    if(searchParams.get("next[124]")){
         Accessory_holder_tam = 1;
        }
    if(Accessory_holder_Array.length!==0 || Accessory_holder_tam === 1){
    searchParams.set("next[124]",Accessory_holder_Array);
    }
    // Rod_power
    var Rod_power_tam = 0;
    if(searchParams.get("next[125]")){
         Rod_power_tam = 1;
        }
    if(Rod_power_Array.length!==0 || Rod_power_tam === 1){
    searchParams.set("next[125]",Rod_power_Array);
    }
    // Rod_type
    var Rod_type_tam = 0;
    if(searchParams.get("next[126]")){
         Rod_type_tam = 1;
        }
    if(Rod_type_Array.length!==0 || Rod_type_tam === 1){
    searchParams.set("next[126]",Rod_type_Array);
    }
    // Rod_action
    var Rod_action_tam = 0;
    if(searchParams.get("next[127]")){
         Rod_action_tam = 1;
        }
    if(Rod_action_Array.length!==0 || Rod_action_tam === 1){
    searchParams.set("next[127]",Rod_action_Array);
    }
    // Handle_material
    var Handle_material_tam = 0;
    if(searchParams.get("next[128]")){
         Handle_material_tam = 1;
        }
    if(Handle_material_Array.length!==0 || Handle_material_tam === 1){
    searchParams.set("next[128]",Handle_material_Array);
    }
    // Construction
    var Construction_tam = 0;
    if(searchParams.get("next[129]")){
         Construction_tam = 1;
        }
    if(Construction_Array.length!==0 || Construction_tam === 1){
    searchParams.set("next[129]",Construction_Array);
    }
    // Drag_type
    var Drag_type_tam = 0;
    if(searchParams.get("next[130]")){
         Drag_type_tam = 1;
        }
    if(Drag_type_Array.length!==0 || Drag_type_tam === 1){
    searchParams.set("next[130]",Drag_type_Array);
    }
    // Container_type
    var Container_type_tam = 0;
    if(searchParams.get("next[131]")){
         Container_type_tam = 1;
        }
    if(Container_type_Array.length!==0 || Container_type_tam === 1){
    searchParams.set("next[131]",Container_type_Array);
    }
    // Edge_type
    var Edge_type_tam = 0;
    if(searchParams.get("next[132]")){
         Edge_type_tam = 1;
        }
    if(Edge_type_Array.length!==0 || Edge_type_tam === 1){
    searchParams.set("next[132]",Edge_type_Array);
    }
    // Sheath
    var Sheath_tam = 0;
    if(searchParams.get("next[133]")){
         Sheath_tam = 1;
        }
    if(Sheath_Array.length!==0 || Sheath_tam === 1){
    searchParams.set("next[133]",Sheath_Array);
    }
    // Coated
    var Coated_tam = 0;
    if(searchParams.get("next[134]")){
         Coated_tam = 1;
        }
    if(Coated_Array.length!==0 || Coated_tam === 1){
    searchParams.set("next[134]",Coated_Array);
    }
    // Finish
    var Finish_tam = 0;
    if(searchParams.get("next[135]")){
         Finish_tam = 1;
        }
    if(Finish_Array.length!==0 || Finish_tam === 1){
    searchParams.set("next[135]",Finish_Array);
    }
    // Attachment_type
    var Attachment_type_tam = 0;
    if(searchParams.get("next[136]")){
         Attachment_type_tam = 1;
        }
    if(Attachment_type_Array.length!==0 || Attachment_type_tam === 1){
    searchParams.set("next[136]",Attachment_type_Array);
    }
    // Auto_locking
    var Auto_locking_tam = 0;
    if(searchParams.get("next[137]")){
         Auto_locking_tam = 1;
        }
    if(Auto_locking_Array.length!==0 || Auto_locking_tam === 1){
    searchParams.set("next[137]",Auto_locking_Array);
    }
    // Tray_included
    var Tray_included_tam = 0;
    if(searchParams.get("next[138]")){
         Tray_included_tam = 1;
        }
    if(Tray_included_Array.length!==0 || Tray_included_tam === 1){
    searchParams.set("next[138]",Tray_included_Array);
    }
    // Magnetic
    var Magnetic_tam = 0;
    if(searchParams.get("next[139]")){
         Magnetic_tam = 1;
        }
    if(Magnetic_Array.length!==0 || Magnetic_tam === 1){
    searchParams.set("next[139]",Magnetic_Array);
    }
    // Diary_type
    var Diary_type_tam = 0;
    if(searchParams.get("next[140]")){
         Diary_type_tam = 1;
        }
    if(Diary_type_Array.length!==0 || Diary_type_tam === 1){
    searchParams.set("next[140]",Diary_type_Array);
    }
    // Steam_burst
    var Steam_burst_tam = 0;
    if(searchParams.get("next[141]")){
         Steam_burst_tam = 1;
        }
    if(Steam_burst_Array.length!==0 || Steam_burst_tam === 1){
    searchParams.set("next[141]",Steam_burst_Array);
    }
    // Spray
    var Spray_tam = 0;
    if(searchParams.get("next[142]")){
         Spray_tam = 1;
        }
    if(Spray_Array.length!==0 || Spray_tam === 1){
    searchParams.set("next[142]",Spray_Array);
    }
    // Power_consumption
    var Power_consumption_tam = 0;
    if(searchParams.get("next[143]")){
         Power_consumption_tam = 1;
        }
    if(Power_consumption_Array.length!==0 || Power_consumption_tam === 1){
    searchParams.set("next[143]",Power_consumption_Array);
    }
    // Rated_pressure
    var Rated_pressure_tam = 0;
    if(searchParams.get("next[144]")){
         Rated_pressure_tam = 1;
        }
    if(Rated_pressure_Array.length!==0 || Rated_pressure_tam === 1){
    searchParams.set("next[144]",Rated_pressure_Array);
    }
    // Star_rating
    var Star_rating_tam = 0;
    if(searchParams.get("next[145]")){
         Star_rating_tam = 1;
        }
    if(Star_rating_Array.length!==0 || Star_rating_tam === 1){
    searchParams.set("next[145]",Star_rating_Array);
    }
    // Filter_type
    var Filter_type_tam = 0;
    if(searchParams.get("next[146]")){
         Filter_type_tam = 1;
        }
    if(Filter_type_Array.length!==0 || Filter_type_tam === 1){
    searchParams.set("next[146]",Filter_type_Array);
    }
    // Auto_revolving_heater
    var Auto_revolving_heater_tam = 0;
    if(searchParams.get("next[147]")){
         Auto_revolving_heater_tam = 1;
        }
    if(Auto_revolving_heater_Array.length!==0 || Auto_revolving_heater_tam === 1){
    searchParams.set("next[147]",Auto_revolving_heater_Array);
    }
    // Number_of_stitches
    var Number_of_stitches_tam = 0;
    if(searchParams.get("next[148]")){
         Number_of_stitches_tam = 1;
        }
    if(Number_of_stitches_Array.length!==0 || Number_of_stitches_tam === 1){
    searchParams.set("next[148]",Number_of_stitches_Array);
    }
    // Number_of_blades
    var Number_of_blades_tam = 0;
    if(searchParams.get("next[149]")){
         Number_of_blades_tam = 1;
        }
    if(Number_of_blades_Array.length!==0 || Number_of_blades_tam === 1){
    searchParams.set("next[149]",Number_of_blades_Array);
    }
    // Load_type
    var Load_type_tam = 0;
    if(searchParams.get("next[150]")){
         Load_type_tam = 1;
        }
    if(Load_type_Array.length!==0 || Load_type_tam === 1){
    searchParams.set("next[150]",Load_type_Array);
    }
    // Number_of_ways
    var Number_of_ways_tam = 0;
    if(searchParams.get("next[151]")){
         Number_of_ways_tam = 1;
        }
    if(Number_of_ways_Array.length!==0 || Number_of_ways_tam === 1){
    searchParams.set("next[151]",Number_of_ways_Array);
    }
    // Wired_or_wireless
    var Wired_or_wireless_tam = 0;
    if(searchParams.get("next[152]")){
         Wired_or_wireless_tam = 1;
        }
    if(Wired_or_wireless_Array.length!==0 || Wired_or_wireless_tam === 1){
    searchParams.set("next[152]",Wired_or_wireless_Array);
    }
    // Energy_ratings
    var Energy_ratings_tam = 0;
    if(searchParams.get("next[153]")){
         Energy_ratings_tam = 1;
        }
    if(Energy_ratings_Array.length!==0 || Energy_ratings_tam === 1){
    searchParams.set("next[153]",Energy_ratings_Array);
    }
    // Condenser_coil
    var Condenser_coil_tam = 0;
    if(searchParams.get("next[154]")){
         Condenser_coil_tam = 1;
        }
    if(Condenser_coil_Array.length!==0 || Condenser_coil_tam === 1){
    searchParams.set("next[154]",Condenser_coil_Array);
    }
    // Ideal_for
    var Ideal_for_tam = 0;
    if(searchParams.get("next[155]")){
         Ideal_for_tam = 1;
        }
    if(Ideal_for_Array.length!==0 || Ideal_for_tam === 1){
    searchParams.set("next[155]",Ideal_for_Array);
    }
    // Technology
    var Technology_tam = 0;
    if(searchParams.get("next[156]")){
         Technology_tam = 1;
        }
    if(Technology_Array.length!==0 || Technology_tam === 1){
    searchParams.set("next[156]",Technology_Array);
    }
    // Defrosting_type
    var Defrosting_type_tam = 0;
    if(searchParams.get("next[157]")){
         Defrosting_type_tam = 1;
        }
    if(Defrosting_type_Array.length!==0 || Defrosting_type_tam === 1){
    searchParams.set("next[157]",Defrosting_type_Array);
    }
    // Year
    var Year_tam = 0;
    if(searchParams.get("next[158]")){
         Year_tam = 1;
        }
    if(Year_Array.length!==0 || Year_tam === 1){
    searchParams.set("next[158]",Year_Array);
    }
    // Star
    var Star_tam = 0;
    if(searchParams.get("next[159]")){
         Star_tam = 1;
        }
    if(Star_Array.length!==0 || Star_tam === 1){
    searchParams.set("next[159]",Star_Array);
    }
    // Bee_rating
    var Bee_rating_tam = 0;
    if(searchParams.get("next[160]")){
         Bee_rating_tam = 1;
        }
    if(Bee_rating_Array.length!==0 || Bee_rating_tam === 1){
    searchParams.set("next[160]",Bee_rating_Array);
    }
    // Washing_system
    var Washing_system_tam = 0;
    if(searchParams.get("next[161]")){
         Washing_system_tam = 1;
        }
    if(Washing_system_Array.length!==0 || Washing_system_tam === 1){
    searchParams.set("next[161]",Washing_system_Array);
    }
    // Power
    var Power_tam = 0;
    if(searchParams.get("next[162]")){
         Power_tam = 1;
        }
    if(Power_Array.length!==0 || Power_tam === 1){
    searchParams.set("next[162]",Power_Array);
    }
    // Control
    var Control_tam = 0;
    if(searchParams.get("next[163]")){
         Control_tam = 1;
        }
    if(Control_Array.length!==0 || Control_tam === 1){
    searchParams.set("next[163]",Control_Array);
    }
    // Ductless
    var Ductless_tam = 0;
    if(searchParams.get("next[164]")){
         Ductless_tam = 1;
        }
    if(Ductless_Array.length!==0 || Ductless_tam === 1){
    searchParams.set("next[164]",Ductless_Array);
    }
    // Auto_clean
    var Auto_clean_tam = 0;
    if(searchParams.get("next[165]")){
         Auto_clean_tam = 1;
        }
    if(Auto_clean_Array.length!==0 || Auto_clean_tam === 1){
    searchParams.set("next[165]",Auto_clean_Array);
    }
    // Cups
    var Cups_tam = 0;
    if(searchParams.get("next[166]")){
         Cups_tam = 1;
        }
    if(Cups_Array.length!==0 || Cups_tam === 1){
    searchParams.set("next[166]",Cups_Array);
    }
    // Number_of_eggs
    var Number_of_eggs_tam = 0;
    if(searchParams.get("next[167]")){
         Number_of_eggs_tam = 1;
        }
    if(Number_of_eggs_Array.length!==0 || Number_of_eggs_tam === 1){
    searchParams.set("next[167]",Number_of_eggs_Array);
    }
    // Number_of_slices
    var Number_of_slices_tam = 0;
    if(searchParams.get("next[168]")){
         Number_of_slices_tam = 1;
        }
    if(Number_of_slices_Array.length!==0 || Number_of_slices_tam === 1){
    searchParams.set("next[168]",Number_of_slices_Array);
    }
    // Screen_size
    var Screen_size_tam = 0;
    if(searchParams.get("next[169]")){
         Screen_size_tam = 1;
        }
    if(Screen_size_Array.length!==0 || Screen_size_tam === 1){
    searchParams.set("next[169]",Screen_size_Array);
    }
    // Operating_system
    var Operating_system_tam = 0;
    if(searchParams.get("next[170]")){
         Operating_system_tam = 1;
        }
    if(Operating_system_Array.length!==0 || Operating_system_tam === 1){
    searchParams.set("next[170]",Operating_system_Array);
    }
    // Hard_disk_capacity
    var Hard_disk_capacity_tam = 0;
    if(searchParams.get("next[171]")){
         Hard_disk_capacity_tam = 1;
        }
    if(Hard_disk_capacity_Array.length!==0 || Hard_disk_capacity_tam === 1){
    searchParams.set("next[171]",Hard_disk_capacity_Array);
    }
    // Storage_type
    var Storage_type_tam = 0;
    if(searchParams.get("next[172]")){
         Storage_type_tam = 1;
        }
    if(Storage_type_Array.length!==0 || Storage_type_tam === 1){
    searchParams.set("next[172]",Storage_type_Array);
    }
    // Processor
    var Processor_tam = 0;
    if(searchParams.get("next[173]")){
         Processor_tam = 1;
        }
    if(Processor_Array.length!==0 || Processor_tam === 1){
    searchParams.set("next[173]",Processor_Array);
    }
    // Processor_brand
    var Processor_brand_tam = 0;
    if(searchParams.get("next[174]")){
         Processor_brand_tam = 1;
        }
    if(Processor_brand_Array.length!==0 || Processor_brand_tam === 1){
    searchParams.set("next[174]",Processor_brand_Array);
    }
    // Processor_gen
    var Processor_gen_tam = 0;
    if(searchParams.get("next[175]")){
         Processor_gen_tam = 1;
        }
    if(Processor_gen_Array.length!==0 || Processor_gen_tam === 1){
    searchParams.set("next[175]",Processor_gen_Array);
    }
    // RAM_type
    var RAM_type_tam = 0;
    if(searchParams.get("next[176]")){
         RAM_type_tam = 1;
        }
    if(RAM_type_Array.length!==0 || RAM_type_tam === 1){
    searchParams.set("next[176]",RAM_type_Array);
    }
        // RAM
    var RAM_tam = 0;
    if(searchParams.get("next[177]")){
         RAM_tam = 1;
        }
    if(RAM_Array.length!==0 || RAM_tam === 1){
    searchParams.set("next[177]",RAM_Array);
    }
    // Graphics
    var Graphics_tam = 0;
    if(searchParams.get("next[178]")){
         Graphics_tam = 1;
        }
    if(Graphics_Array.length!==0 || Graphics_tam === 1){
    searchParams.set("next[178]",Graphics_Array);
    }
    // Graphics_name
    var Graphics_name_tam = 0;
    if(searchParams.get("next[179]")){
         Graphics_name_tam = 1;
        }
    if(Graphics_name_Array.length!==0 || Graphics_name_tam === 1){
    searchParams.set("next[179]",Graphics_name_Array);
    }
        // Graphics_processor_series
    var Graphics_processor_series_tam = 0;
    if(searchParams.get("next[180]")){
         Graphics_processor_series_tam = 1;
        }
    if(Graphics_processor_series_Array.length!==0 || Graphics_processor_series_tam === 1){
    searchParams.set("next[180]",Graphics_processor_series_Array);
    }
        // Graphics_memory_type
    var Graphics_memory_type_tam = 0;
    if(searchParams.get("next[181]")){
         Graphics_memory_type_tam = 1;
        }
    if(Graphics_memory_type_Array.length!==0 || Graphics_memory_type_tam === 1){
    searchParams.set("next[181]",Graphics_memory_type_Array);
    }
        // Touch_screen
    var Touch_screen_tam = 0;
    if(searchParams.get("next[182]")){
         Touch_screen_tam = 1;
        }
    if(Touch_screen_Array.length!==0 || Touch_screen_tam === 1){
    searchParams.set("next[182]",Touch_screen_Array);
    }
        // Interface
    var Interface_tam = 0;
    if(searchParams.get("next[183]")){
         Interface_tam = 1;
        }
    if(Interface_Array.length!==0 || Interface_tam === 1){
    searchParams.set("next[183]",Interface_Array);
    }
        // Water_proof
    var Water_proof_tam = 0;
    if(searchParams.get("next[184]")){
         Water_proof_tam = 1;
        }
    if(Water_proof_Array.length!==0 || Water_proof_tam === 1){
    searchParams.set("next[184]",Water_proof_Array);
    }
        // Operation_type
    var Operation_type_tam = 0;
    if(searchParams.get("next[185]")){
         Operation_type_tam = 1;
        }
    if(Operation_type_Array.length!==0 || Operation_type_tam === 1){
    searchParams.set("next[185]",Operation_type_Array);
    }
    // Number_of_cells
    var Number_of_cells_tam = 0;
    if(searchParams.get("next[186]")){
         Number_of_cells_tam = 1;
        }
    if(Number_of_cells_Array.length!==0 || Number_of_cells_tam === 1){
    searchParams.set("next[186]",Number_of_cells_Array);
    }
    // Compatible_laptop_size
    var Compatible_laptop_size_tam = 0;
    if(searchParams.get("next[187]")){
         Compatible_laptop_size_tam = 1;
        }
    if(Compatible_laptop_size_Array.length!==0 || Compatible_laptop_size_tam === 1){
    searchParams.set("next[187]",Compatible_laptop_size_Array);
    }
    // Ergonomic
    var Ergonomic_tam = 0;
    if(searchParams.get("next[188]")){
         Ergonomic_tam = 1;
        }
    if(Ergonomic_Array.length!==0 || Ergonomic_tam === 1){
    searchParams.set("next[188]",Ergonomic_Array);
    }
    // Illuminated_keys
    var Illuminated_keys_tam = 0;
    if(searchParams.get("next[189]")){
         Illuminated_keys_tam = 1;
        }
    if(Illuminated_keys_Array.length!==0 || Illuminated_keys_tam === 1){
    searchParams.set("next[189]",Illuminated_keys_Array);
    }
    // Shock_resistance
    var Shock_resistance_tam = 0;
    if(searchParams.get("next[190]")){
         Shock_resistance_tam = 1;
        }
    if(Shock_resistance_Array.length!==0 || Shock_resistance_tam === 1){
    searchParams.set("next[190]",Shock_resistance_Array);
    }
    // Wireless_speed
    var Wireless_speed_tam = 0;
    if(searchParams.get("next[191]")){
         Wireless_speed_tam = 1;
        }
    if(Wireless_speed_Array.length!==0 || Wireless_speed_tam === 1){
    searchParams.set("next[191]",Wireless_speed_Array);
    }
    // Number_of_Ethernet_ports
    var Number_of_Ethernet_ports_tam = 0;
    if(searchParams.get("next[192]")){
         Number_of_Ethernet_ports_tam = 1;
        }
    if(Number_of_Ethernet_ports_Array.length!==0 || Number_of_Ethernet_ports_tam === 1){
    searchParams.set("next[192]",Number_of_Ethernet_ports_Array);
    }
    // Transfer_speed
    var Transfer_speed_tam = 0;
    if(searchParams.get("next[193]")){
         Transfer_speed_tam = 1;
        }
    if(Transfer_speed_Array.length!==0 || Transfer_speed_tam === 1){
    searchParams.set("next[193]",Transfer_speed_Array);
    }
    // Voice_support
    var Voice_support_tam = 0;
    if(searchParams.get("next[194]")){
         Voice_support_tam = 1;
        }
    if(Voice_support_Array.length!==0 || Voice_support_tam === 1){
    searchParams.set("next[194]",Voice_support_Array);
    }
    // Memory_capacity
    var Memory_capacity_tam = 0;
    if(searchParams.get("next[195]")){
         Memory_capacity_tam = 1;
        }
    if(Memory_capacity_Array.length!==0 || Memory_capacity_tam === 1){
    searchParams.set("next[195]",Memory_capacity_Array);
    }
    // Max_wireless_transmission_rate
    var Max_wireless_transmission_rate_tam = 0;
    if(searchParams.get("next[196]")){
         Max_wireless_transmission_rate_tam = 1;
        }
    if(Max_wireless_transmission_rate_Array.length!==0 || Max_wireless_transmission_rate_tam === 1){
    searchParams.set("next[196]",Max_wireless_transmission_rate_Array);
    }
    // Frequency_band
    var Frequency_band_tam = 0;
    if(searchParams.get("next[197]")){
         Frequency_band_tam = 1;
        }
    if(Frequency_band_Array.length!==0 || Frequency_band_tam === 1){
    searchParams.set("next[197]",Frequency_band_Array);
    }
    // Compatibility
    var Compatibility_tam = 0;
    if(searchParams.get("next[198]")){
         Compatibility_tam = 1;
        }
    if(Compatibility_Array.length!==0 || Compatibility_tam === 1){
    searchParams.set("next[198]",Compatibility_Array);
    }
    // Frequency
    var Frequency_tam = 0;
    if(searchParams.get("next[199]")){
         Frequency_tam = 1;
        }
    if(Frequency_Array.length!==0 || Frequency_tam === 1){
    searchParams.set("next[199]",Frequency_Array);
    }
    // Number_of_USB_ports
    var Number_of_USB_ports_tam = 0;
    if(searchParams.get("next[200]")){
         Number_of_USB_ports_tam = 1;
        }
    if(Number_of_USB_ports_Array.length!==0 || Number_of_USB_ports_tam === 1){
    searchParams.set("next[200]",Number_of_USB_ports_Array);
    }
    // Antennae
    var Antennae_tam = 0;
    if(searchParams.get("next[201]")){
         Antennae_tam = 1;
        }
    if(Antennae_Array.length!==0 || Antennae_tam === 1){
    searchParams.set("next[201]",Antennae_Array);
    }
    // GST_invoice
    var GST_invoice_tam = 0;
    if(searchParams.get("next[202]")){
         GST_invoice_tam = 1;
        }
    if(GST_invoice_Array.length!==0 || GST_invoice_tam === 1){
    searchParams.set("next[202]",GST_invoice_Array);
    }
    // Offers
    var Offers_tam = 0;
    if(searchParams.get("next[203]")){
         Offers_tam = 1;
        }
    if(Offers_Array.length!==0 || Offers_tam === 1){
    searchParams.set("next[203]",Offers_Array);
    }
    // Printer_type
    var Printer_type_tam = 0;
    if(searchParams.get("next[204]")){
         Printer_type_tam = 1;
        }
    if(Printer_type_Array.length!==0 || Printer_type_tam === 1){
    searchParams.set("next[204]",Printer_type_Array);
    }
    // Scanner_type
    var Scanner_type_tam = 0;
    if(searchParams.get("next[205]")){
         Scanner_type_tam = 1;
        }
    if(Scanner_type_Array.length!==0 || Scanner_type_tam === 1){
    searchParams.set("next[205]",Scanner_type_Array);
    }
    // Printer_output
    var Printer_output_tam = 0;
    if(searchParams.get("next[206]")){
         Printer_output_tam = 1;
        }
    if(Printer_output_Array.length!==0 || Printer_output_tam === 1){
    searchParams.set("next[206]",Printer_output_Array);
    }
    // Refilling_type
    var Refilling_type_tam = 0;
    if(searchParams.get("next[207]")){
         Refilling_type_tam = 1;
        }
    if(Refilling_type_Array.length!==0 || Refilling_type_tam === 1){
    searchParams.set("next[207]",Refilling_type_Array);
    }
    // Function
    var Function_tam = 0;
    if(searchParams.get("next[208]")){
         Function_tam = 1;
        }
    if(Function_Array.length!==0 || Function_tam === 1){
    searchParams.set("next[208]",Function_Array);
    }
    // Portable
    var Portable_tam = 0;
    if(searchParams.get("next[209]")){
         Portable_tam = 1;
        }
    if(Portable_Array.length!==0 || Portable_tam === 1){
    searchParams.set("next[209]",Portable_Array);
    }
    // Device_chipset
    var Device_chipset_tam = 0;
    if(searchParams.get("next[210]")){
         Device_chipset_tam = 1;
        }
    if(Device_chipset_Array.length!==0 || Device_chipset_tam === 1){
    searchParams.set("next[210]",Device_chipset_Array);
    }
    // Lamp_life
    var Lamp_life_tam = 0;
    if(searchParams.get("next[211]")){
         Lamp_life_tam = 1;
        }
    if(Lamp_life_Array.length!==0 || Lamp_life_tam === 1){
    searchParams.set("next[211]",Lamp_life_Array);
    }
    // Brightness
    var Brightness_tam = 0;
    if(searchParams.get("next[212]")){
         Brightness_tam = 1;
        }
    if(Brightness_Array.length!==0 || Brightness_tam === 1){
    searchParams.set("next[212]",Brightness_Array);
    }
    // Edition
    var Edition_tam = 0;
    if(searchParams.get("next[213]")){
         Edition_tam = 1;
        }
    if(Edition_Array.length!==0 || Edition_tam === 1){
    searchParams.set("next[213]",Edition_Array);
    }
    // Architecture
    var Architecture_tam = 0;
    if(searchParams.get("next[214]")){
         Architecture_tam = 1;
        }
    if(Architecture_Array.length!==0 || Architecture_tam === 1){
    searchParams.set("next[214]",Architecture_Array);
    }
    // Board
    var Board_tam = 0;
    if(searchParams.get("next[215]")){
         Board_tam = 1;
        }
    if(Board_Array.length!==0 || Board_tam === 1){
    searchParams.set("next[215]",Board_Array);
    }
    // Class
    var Class_tam = 0;
    if(searchParams.get("next[216]")){
         Class_tam = 1;
        }
    if(Class_Array.length!==0 || Class_tam === 1){
    searchParams.set("next[216]",Class_Array);
    }
    // Subject
    var Subject_tam = 0;
    if(searchParams.get("next[217]")){
         Subject_tam = 1;
        }
    if(Subject_Array.length!==0 || Subject_tam === 1){
    searchParams.set("next[217]",Subject_Array);
    }
    // Validity
    var Validity_tam = 0;
    if(searchParams.get("next[218]")){
         Validity_tam = 1;
        }
    if(Validity_Array.length!==0 || Validity_tam === 1){
    searchParams.set("next[218]",Validity_Array);
    }
    // Screen_resolution
    var Screen_resolution_tam = 0;
    if(searchParams.get("next[219]")){
         Screen_resolution_tam = 1;
        }
    if(Screen_resolution_Array.length!==0 || Screen_resolution_tam === 1){
    searchParams.set("next[219]",Screen_resolution_Array);
    }
    // Screen_form_factor
    var Screen_form_factor_tam = 0;
    if(searchParams.get("next[220]")){
         Screen_form_factor_tam = 1;
        }
    if(Screen_form_factor_Array.length!==0 || Screen_form_factor_tam === 1){
    searchParams.set("next[220]",Screen_form_factor_Array);
    }
    // Inbuilt_speaker
    var Inbuilt_speaker_tam = 0;
    if(searchParams.get("next[221]")){
         Inbuilt_speaker_tam = 1;
        }
    if(Inbuilt_speaker_Array.length!==0 || Inbuilt_speaker_tam === 1){
    searchParams.set("next[221]",Inbuilt_speaker_Array);
    }
    // Panel_type
    var Panel_type_tam = 0;
    if(searchParams.get("next[222]")){
         Panel_type_tam = 1;
        }
    if(Panel_type_Array.length!==0 || Panel_type_tam === 1){
    searchParams.set("next[222]",Panel_type_Array);
    }
    // Connectivity
    var Connectivity_tam = 0;
    if(searchParams.get("next[223]")){
         Connectivity_tam = 1;
        }
    if(Connectivity_Array.length!==0 || Connectivity_tam === 1){
    searchParams.set("next[223]",Connectivity_Array);
    }
    // Response_time
    var Response_time_tam = 0;
    if(searchParams.get("next[224]")){
         Response_time_tam = 1;
        }
    if(Response_time_Array.length!==0 || Response_time_tam === 1){
    searchParams.set("next[224]",Response_time_Array);
    }
    // Fan_diameter
    var Fan_diameter_tam = 0;
    if(searchParams.get("next[225]")){
         Fan_diameter_tam = 1;
        }
    if(Fan_diameter_Array.length!==0 || Fan_diameter_tam === 1){
    searchParams.set("next[225]",Fan_diameter_Array);
    }
    // Max_fan_speed
    var Max_fan_speed_tam = 0;
    if(searchParams.get("next[226]")){
         Max_fan_speed_tam = 1;
        }
    if(Max_fan_speed_Array.length!==0 || Max_fan_speed_tam === 1){
    searchParams.set("next[226]",Max_fan_speed_Array);
    }
    // Number_of_satacables
    var Number_of_satacables_tam = 0;
    if(searchParams.get("next[227]")){
         Number_of_satacables_tam = 1;
        }
    if(Number_of_satacables_Array.length!==0 || Number_of_satacables_tam === 1){
    searchParams.set("next[227]",Number_of_satacables_Array);
    }

    // Power_output
    var Power_output_tam = 0;
    if(searchParams.get("next[228]")){
         Power_output_tam = 1;
        }
    if(Power_output_Array.length!==0 || Power_output_tam === 1){
    searchParams.set("next[228]",Power_output_Array);
    }
    // Number_of_cores
    var Number_of_cores_tam = 0;
    if(searchParams.get("next[229]")){
         Number_of_cores_tam = 1;
        }
    if(Number_of_cores_Array.length!==0 || Number_of_cores_tam === 1){
    searchParams.set("next[229]",Number_of_cores_Array);
    }
    // Processor_speed
    var Processor_speed_tam = 0;
    if(searchParams.get("next[230]")){
         Processor_speed_tam = 1;
        }
    if(Processor_speed_Array.length!==0 || Processor_speed_tam === 1){
    searchParams.set("next[230]",Processor_speed_Array);
    }
    // Data_rate
    var Data_rate_tam = 0;
    if(searchParams.get("next[231]")){
         Data_rate_tam = 1;
        }
    if(Data_rate_Array.length!==0 || Data_rate_tam === 1){
    searchParams.set("next[231]",Data_rate_Array);
    }
    // Device
    var Device_tam = 0;
    if(searchParams.get("next[232]")){
         Device_tam = 1;
        }
    if(Device_Array.length!==0 || Device_tam === 1){
    searchParams.set("next[232]",Device_Array);
    }
    // Chipset
    var Chipset_tam = 0;
    if(searchParams.get("next[233]")){
         Chipset_tam = 1;
        }
    if(Chipset_Array.length!==0 || Chipset_tam === 1){
    searchParams.set("next[233]",Chipset_Array);
    }
    // Clock_speed
    var Clock_speed_tam = 0;
    if(searchParams.get("next[234]")){
         Clock_speed_tam = 1;
        }
    if(Clock_speed_Array.length!==0 || Clock_speed_tam === 1){
    searchParams.set("next[234]",Clock_speed_Array);
    }
    // Number_of_HDMI_ports
    var Number_of_HDMI_ports_tam = 0;
    if(searchParams.get("next[235]")){
         Number_of_HDMI_ports_tam = 1;
        }
    if(Number_of_HDMI_ports_Array.length!==0 || Number_of_HDMI_ports_tam === 1){
    searchParams.set("next[235]",Number_of_HDMI_ports_Array);
    }
    // Configuration
    var Configuration_tam = 0;
    if(searchParams.get("next[236]")){
         Configuration_tam = 1;
        }
    if(Configuration_Array.length!==0 || Configuration_tam === 1){
    searchParams.set("next[236]",Configuration_Array);
    }
    // Smart_tv
    var Smart_tv_tam = 0;
    if(searchParams.get("next[237]")){
         Smart_tv_tam = 1;
        }
    if(Smart_tv_Array.length!==0 || Smart_tv_tam === 1){
    searchParams.set("next[237]",Smart_tv_Array);
    }
    // Screen_type
    var Screen_type_tam = 0;
    if(searchParams.get("next[238]")){
         Screen_type_tam = 1;
        }
    if(Screen_type_Array.length!==0 || Screen_type_tam === 1){
    searchParams.set("next[238]",Screen_type_Array);
    }
    // Curve_tv
    var Curve_tv_tam = 0;
    if(searchParams.get("next[239]")){
         Curve_tv_tam = 1;
        }
    if(Curve_tv_Array.length!==0 || Curve_tv_tam === 1){
    searchParams.set("next[239]",Curve_tv_Array);
    }
    // Internal_storage
    var Internal_storage_tam = 0;
    if(searchParams.get("next[240]")){
         Internal_storage_tam = 1;
        }
    if(Internal_storage_Array.length!==0 || Internal_storage_tam === 1){
    searchParams.set("next[240]",Internal_storage_Array);
    }
    // Battery_capacity
    var Battery_capacity_tam = 0;
    if(searchParams.get("next[241]")){
         Battery_capacity_tam = 1;
        }
    if(Battery_capacity_Array.length!==0 || Battery_capacity_tam === 1){
    searchParams.set("next[241]",Battery_capacity_Array);
    }
    // Network_type
    var Network_type_tam = 0;
    if(searchParams.get("next[242]")){
         Network_type_tam = 1;
        }
    if(Network_type_Array.length!==0 || Network_type_tam === 1){
    searchParams.set("next[242]",Network_type_Array);
    }
    // SIM_type
    var SIM_type_tam = 0;
    if(searchParams.get("next[243]")){
         SIM_type_tam = 1;
        }
    if(SIM_type_Array.length!==0 || SIM_type_tam === 1){
    searchParams.set("next[243]",SIM_type_Array);
    }

    // Primary_camera
    var Primary_camera_tam = 0;
    if(searchParams.get("next[244]")){
         Primary_camera_tam = 1;
        }
    if(Primary_camera_Array.length!==0 || Primary_camera_tam === 1){
    searchParams.set("next[244]",Primary_camera_Array);
    }
    // Secondary_camera
    var Secondary_camera_tam = 0;
    if(searchParams.get("next[245]")){
         Secondary_camera_tam = 1;
        }
    if(Secondary_camera_Array.length!==0 || Secondary_camera_tam === 1){
    searchParams.set("next[245]",Secondary_camera_Array);
    }
    // Operating_system_name
    var Operating_system_name_tam = 0;
    if(searchParams.get("next[246]")){
         Operating_system_name_tam = 1;
        }
    if(Operating_system_name_Array.length!==0 || Operating_system_name_tam === 1){
    searchParams.set("next[246]",Operating_system_name_Array);
    }
    // Speciality
    var Speciality_tam = 0;
    if(searchParams.get("next[247]")){
         Speciality_tam = 1;
        }
    if(Speciality_Array.length!==0 || Speciality_tam === 1){
    searchParams.set("next[247]",Speciality_Array);
    }
    // Voice_calling
    var Voice_calling_tam = 0;
    if(searchParams.get("next[248]")){
         Voice_calling_tam = 1;
        }
    if(Voice_calling_Array.length!==0 || Voice_calling_tam === 1){
    searchParams.set("next[248]",Voice_calling_Array);
    }
    // Battery_type
    var Battery_type_tam = 0;
    if(searchParams.get("next[249]")){
         Battery_type_tam = 1;
        }
    if(Battery_type_Array.length!==0 || Battery_type_tam === 1){
    searchParams.set("next[249]",Battery_type_Array);
    }
    // Syncing_method
    var Syncing_method_tam = 0;
    if(searchParams.get("next[250]")){
         Syncing_method_tam = 1;
        }
    if(Syncing_method_Array.length!==0 || Syncing_method_tam === 1){
    searchParams.set("next[250]",Syncing_method_Array);
    }
    // Wireless_standard
    var Wireless_standard_tam = 0;
    if(searchParams.get("next[251]")){
         Wireless_standard_tam = 1;
        }
    if(Wireless_standard_Array.length!==0 || Wireless_standard_tam === 1){
    searchParams.set("next[251]",Wireless_standard_Array);
    }
    // Indicator
    var Indicator_tam = 0;
    if(searchParams.get("next[252]")){
         Indicator_tam = 1;
        }
    if(Indicator_Array.length!==0 || Indicator_tam === 1){
    searchParams.set("next[252]",Indicator_Array);
    }
    // Compatible_mobile
    var Compatible_mobile_tam = 0;
    if(searchParams.get("next[253]")){
         Compatible_mobile_tam = 1;
        }
    if(Compatible_mobile_Array.length!==0 || Compatible_mobile_tam === 1){
    searchParams.set("next[253]",Compatible_mobile_Array);
    }
    // Extension
    var Extension_tam = 0;
    if(searchParams.get("next[254]")){
         Extension_tam = 1;
        }
    if(Extension_Array.length!==0 || Extension_tam === 1){
    searchParams.set("next[254]",Extension_Array);
    }
    // Movement
    var Movement_tam = 0;
    if(searchParams.get("next[255]")){
         Movement_tam = 1;
        }
    if(Movement_Array.length!==0 || Movement_tam === 1){
    searchParams.set("next[255]",Movement_Array);
    }
    // Fixture_type
    var Fixture_type_tam = 0;
    if(searchParams.get("next[256]")){
         Fixture_type_tam = 1;
        }
    if(Fixture_type_Array.length!==0 || Fixture_type_tam === 1){
    searchParams.set("next[256]",Fixture_type_Array);
    }
    // Installation_type
    var Installation_type_tam = 0;
    if(searchParams.get("next[257]")){
         Installation_type_tam = 1;
        }
    if(Installation_type_Array.length!==0 || Installation_type_tam === 1){
    searchParams.set("next[257]",Installation_type_Array);
    }
    // Sweep_diameter
    var Sweep_diameter_tam = 0;
    if(searchParams.get("next[258]")){
         Sweep_diameter_tam = 1;
        }
    if(Sweep_diameter_Array.length!==0 || Sweep_diameter_tam === 1){
    searchParams.set("next[258]",Sweep_diameter_Array);
    }
    // Phase
    var Phase_tam = 0;
    if(searchParams.get("next[259]")){
         Phase_tam = 1;
        }
    if(Phase_Array.length!==0 || Phase_tam === 1){
    searchParams.set("next[259]",Phase_Array);
    }
    // Number_of_poles
    var Number_of_poles_tam = 0;
    if(searchParams.get("next[260]")){
         Number_of_poles_tam = 1;
        }
    if(Number_of_poles_Array.length!==0 || Number_of_poles_tam === 1){
    searchParams.set("next[260]",Number_of_poles_Array);
    }
    // Flammable
    var Flammable_tam = 0;
    if(searchParams.get("next[261]")){
         Flammable_tam = 1;
        }
    if(Flammable_Array.length!==0 || Flammable_tam === 1){
    searchParams.set("next[261]",Flammable_Array);
    }
    // Sensor_type
    var Sensor_type_tam = 0;
    if(searchParams.get("next[262]")){
         Sensor_type_tam = 1;
        }
    if(Sensor_type_Array.length!==0 || Sensor_type_tam === 1){
    searchParams.set("next[262]",Sensor_type_Array);
    }
    // Effective_pixels
    var Effective_pixels_tam = 0;
    if(searchParams.get("next[263]")){
         Effective_pixels_tam = 1;
        }
    if(Effective_pixels_Array.length!==0 || Effective_pixels_tam === 1){
    searchParams.set("next[263]",Effective_pixels_Array);
    }
    // Maximum_load_capacity
    var Maximum_load_capacity_tam = 0;
    if(searchParams.get("next[264]")){
         Maximum_load_capacity_tam = 1;
        }
    if(Maximum_load_capacity_Array.length!==0 || Maximum_load_capacity_tam === 1){
    searchParams.set("next[264]",Maximum_load_capacity_Array);
    }
    // Prime_Zoom
    var Prime_Zoom_tam = 0;
    if(searchParams.get("next[265]")){
         Prime_Zoom_tam = 1;
        }
    if(Prime_Zoom_Array.length!==0 || Prime_Zoom_tam === 1){
    searchParams.set("next[265]",Prime_Zoom_Array);
    }
    // Focal_length
    var Focal_length_tam = 0;
    if(searchParams.get("next[266]")){
         Focal_length_tam = 1;
        }
    if(Focal_length_Array.length!==0 || Focal_length_tam === 1){
    searchParams.set("next[266]",Focal_length_Array);
    }
    // Lens_type
    var Lens_type_tam = 0;
    if(searchParams.get("next[267]")){
         Lens_type_tam = 1;
        }
    if(Lens_type_Array.length!==0 || Lens_type_tam === 1){
    searchParams.set("next[267]",Lens_type_Array);
    }
    // Max_aperture
    var Max_aperture_tam = 0;
    if(searchParams.get("next[268]")){
         Max_aperture_tam = 1;
        }
    if(Max_aperture_Array.length!==0 || Max_aperture_tam === 1){
    searchParams.set("next[268]",Max_aperture_Array);
    }
    // Lens_mount
    var Lens_mount_tam = 0;
    if(searchParams.get("next[269]")){
         Lens_mount_tam = 1;
        }
    if(Lens_mount_Array.length!==0 || Lens_mount_tam === 1){
    searchParams.set("next[269]",Lens_mount_Array);
    }
    // Max_magnification
    var Max_magnification_tam = 0;
    if(searchParams.get("next[270]")){
         Max_magnification_tam = 1;
        }
    if(Max_magnification_Array.length!==0 || Max_magnification_tam === 1){
    searchParams.set("next[270]",Max_magnification_Array);
    }
    // Mount_tracking
    var Mount_tracking_tam = 0;
    if(searchParams.get("next[271]")){
         Mount_tracking_tam = 1;
        }
    if(Mount_tracking_Array.length!==0 || Mount_tracking_tam === 1){
    searchParams.set("next[271]",Mount_tracking_Array);
    }

    // Placement_type
    var Placement_type_tam = 0;
    if(searchParams.get("next[272]")){
         Placement_type_tam = 1;
        }
    if(Placement_type_Array.length!==0 || Placement_type_tam === 1){
    searchParams.set("next[272]",Placement_type_Array);
    }
    // Male_thread_diameter
    var Male_thread_diameter_tam = 0;
    if(searchParams.get("next[273]")){
         Male_thread_diameter_tam = 1;
        }
    if(Male_thread_diameter_Array.length!==0 || Male_thread_diameter_tam === 1){
    searchParams.set("next[273]",Male_thread_diameter_Array);
    }
    // Female_thread_diameter
    var Female_thread_diameter_tam = 0;
    if(searchParams.get("next[274]")){
         Female_thread_diameter_tam = 1;
        }
    if(Female_thread_diameter_Array.length!==0 || Female_thread_diameter_tam === 1){
    searchParams.set("next[274]",Female_thread_diameter_Array);
    }
    // Vehicle_brand
    var Vehicle_brand_tam = 0;
    if(searchParams.get("next[275]")){
         Vehicle_brand_tam = 1;
        }
    if(Vehicle_brand_Array.length!==0 || Vehicle_brand_tam === 1){
    searchParams.set("next[275]",Vehicle_brand_Array);
    }
    // Vehicle_model
    var Vehicle_model_tam = 0;
    if(searchParams.get("next[276]")){
         Vehicle_model_tam = 1;
        }
    if(Vehicle_model_Array.length!==0 || Vehicle_model_tam === 1){
    searchParams.set("next[276]",Vehicle_model_Array);
    }
    // Number_of_indicator_lamps
    var Number_of_indicator_lamps_tam = 0;
    if(searchParams.get("next[277]")){
         Number_of_indicator_lamps_tam = 1;
        }
    if(Number_of_indicator_lamps_Array.length!==0 || Number_of_indicator_lamps_tam === 1){
    searchParams.set("next[277]",Number_of_indicator_lamps_Array);
    }
    // Tachometer
    var Tachometer_tam = 0;
    if(searchParams.get("next[278]")){
         Tachometer_tam = 1;
        }
    if(Tachometer_Array.length!==0 || Tachometer_tam === 1){
    searchParams.set("next[278]",Tachometer_Array);
    }
    // Armours
    var Armours_tam = 0;
    if(searchParams.get("next[279]")){
         Armours_tam = 1;
        }
    if(Armours_Array.length!==0 || Armours_tam === 1){
    searchParams.set("next[279]",Armours_Array);
    }
    // Platform
    var Platform_tam = 0;
    if(searchParams.get("next[280]")){
         Platform_tam = 1;
        }
    if(Platform_Array.length!==0 || Platform_tam === 1){
    searchParams.set("next[280]",Platform_Array);
    }
    // PEGI_rating
    var PEGI_rating_tam = 0;
    if(searchParams.get("next[281]")){
         PEGI_rating_tam = 1;
        }
    if(PEGI_rating_Array.length!==0 || PEGI_rating_tam === 1){
    searchParams.set("next[281]",PEGI_rating_Array);
    }
    // Game_modes
    var Game_modes_tam = 0;
    if(searchParams.get("next[282]")){
         Game_modes_tam = 1;
        }
    if(Game_modes_Array.length!==0 || Game_modes_tam === 1){
    searchParams.set("next[282]",Game_modes_Array);
    }
    // ESRB_rating
    var ESRB_rating_tam = 0;
    if(searchParams.get("next[283]")){
        ESRB_rating_tam = 1;
        }
    if(ESRB_rating_Array.length!==0 || ESRB_rating_tam === 1){
    searchParams.set("next[283]",ESRB_rating_Array);
    }
    // Temple_material
    var Temple_material_tam = 0;
    if(searchParams.get("next[284]")){
         Temple_material_tam = 1;
        }
    if(Temple_material_Array.length!==0 || Temple_material_tam === 1){
    searchParams.set("next[284]",Temple_material_Array);
    }
    // Lens_type_supported
    var Lens_type_supported_tam = 0;
    if(searchParams.get("next[285]")){
        Lens_type_supported_tam = 1;
        }
    if(Lens_type_supported_Array.length!==0 || Lens_type_supported_tam === 1){
    searchParams.set("next[285]",Lens_type_supported_Array);
    }
    // Temple_color
    var Temple_color_tam = 0;
    if(searchParams.get("next[286]")){
         Temple_color_tam = 1;
        }
    if(Temple_color_Array.length!==0 || Temple_color_tam === 1){
    searchParams.set("next[286]",Temple_color_Array);
    }

    // Set the entire url
    window.location.search = searchParams.toString();
                             }
}

// Function to remove filter
function RemoveAllFilters(){

  if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);

    //Brands
    searchParams.delete("next[2]")

    //Price
    searchParams.delete("next[3]");

    //Colors
    searchParams.delete("next[4]")

    // Fit
    searchParams.delete("next[6]")

    // Pattern
    searchParams.delete("next[7]")


    // Neck_type
    searchParams.delete("next[8]")


    // Sleeve_type
    searchParams.delete("next[9]")

    // Theme
    searchParams.delete("next[10]")


    // Fabric
    searchParams.delete("next[11]")


    // Occasion
    searchParams.delete("next[12]")

    //Ratings
    searchParams.delete("next[5]");

     // Collar
    searchParams.delete("next[13]")

     // type
    searchParams.delete("next[14]")

    // Distress
    searchParams.delete("next[15]")

    // Fade
    searchParams.delete("next[16]")

    // Waist Rise
    searchParams.delete("next[17]")

    // Heel Height
    searchParams.delete("next[18]")

    // Length
    searchParams.delete("next[19]")

    // Closure
    searchParams.delete("next[20]")

    // Sleeve_style
    searchParams.delete("next[21]")

    // usage
    searchParams.delete("next[22]")

    // Hooded
    searchParams.delete("next[23]")

    //Ornamentation
    searchParams.delete("next[24]")

    //Styling
    searchParams.delete("next[25]")

    //Suitable_for
    searchParams.delete("next[26]")

    //Applied_for
    searchParams.delete("next[27]")

    //Hair_type
    searchParams.delete("next[28]")

    //Pack_of
    searchParams.delete("next[29]")

    //Washable
    searchParams.delete("next[30]")

    //Water_resistance
    searchParams.delete("next[31]")

    //Rise
    searchParams.delete("next[32]")

    //Straps
    searchParams.delete("next[33]")

    //Wire_support
    searchParams.delete("next[34]")

     //Padding
    searchParams.delete("next[35]")

    //Seam
    searchParams.delete("next[36]")

    //Coverage
    searchParams.delete("next[37]")

    //Back_style
    searchParams.delete("next[38]")

    //Dial_color
    searchParams.delete("next[39]")

    //Features
    searchParams.delete("next[40]")

    //Dial_shape
    searchParams.delete("next[41]")

    //Strap_material
    searchParams.delete("next[42]")

    //Number_of_compartments
    searchParams.delete("next[43]")

    //Material
    searchParams.delete("next[44]")

    //Bag_size
    searchParams.delete("next[45]")

     //wheels
    searchParams.delete("next[46]")

    //body_type
    searchParams.delete("next[47]")

    //capacity
    searchParams.delete("next[48]")

    //card_slot
    searchParams.delete("next[49]")

    //Strap_color
    searchParams.delete("next[50]")

    //Compatible_OS
    searchParams.delete("next[51]")

    //Display_type
    searchParams.delete("next[52]")

    //Gemstones
    searchParams.delete("next[53]")

    //Gender
    searchParams.delete("next[54]")

    //Blade_material
    searchParams.delete("next[55]")

    //Battery_run_time
    searchParams.delete("next[56]")

     //Body_material
    searchParams.delete("next[57]")

    //Plate_coating
    searchParams.delete("next[58]")

    //Wattage
    searchParams.delete("next[59]")

    //Collection
    searchParams.delete("next[60]")

    //Ring_size
    searchParams.delete("next[61]")

    //Dress_length
    searchParams.delete("next[62]")

    //Length_type
    searchParams.delete("next[63]")

    //Saree_type
    searchParams.delete("next[64]")

    //Saree_style
    searchParams.delete("next[65]")

    //Saree_length
    searchParams.delete("next[66]")

    //Blouse_included
    searchParams.delete("next[67]")

     //Saree_Fall_length
    searchParams.delete("next[68]")

    //Saree_Fall_width
    searchParams.delete("next[69]")

    //Dupatta_included
    searchParams.delete("next[70]")

    //Rechargeable
    searchParams.delete("next[71]")

    //Battery_operated
    searchParams.delete("next[72]")

    //Character
    searchParams.delete("next[73]")

    //Thermoware
    searchParams.delete("next[74]")

    //Age_group
    searchParams.delete("next[75]")

    //Pot_included
    searchParams.delete("next[76]")

    //Bonsai
    searchParams.delete("next[77]")

    //Outer_material
    searchParams.delete("next[78]")

     //Towel_type
    searchParams.delete("next[79]")

    //Reversible
    searchParams.delete("next[80]")

    //width
    searchParams.delete("next[81]")

    //Shape
    searchParams.delete("next[82]")

    //Microwave_safe
    searchParams.delete("next[83]")

    //Showpiece_type
    searchParams.delete("next[84]")

    //No_of_prongs
    searchParams.delete("next[85]")

    //Fragrance
    searchParams.delete("next[86]")

    //Quantity
    searchParams.delete("next[87]")

    //Form
    searchParams.delete("next[88]")

    //Light_used
    searchParams.delete("next[89]")

     //adjustable
    searchParams.delete("next[90]")

    //Mount_type
    searchParams.delete("next[91]")

    //Bulb_included
    searchParams.delete("next[92]")

    //Dimmable
    searchParams.delete("next[93]")

    //Foldable
    searchParams.delete("next[94]")

    //Adjustable_height
    searchParams.delete("next[95]")

    //Mouse_tray
    searchParams.delete("next[96]")

    //Height
    searchParams.delete("next[97]")

    //Storage_included
    searchParams.delete("next[98]")

    //Separated
    searchParams.delete("next[99]")

    //Weight
    searchParams.delete("next[100]")

     //Heart_rate_sensor
    searchParams.delete("next[101]")

    //Design
    searchParams.delete("next[102]")

    //Diameter
    searchParams.delete("next[103]")

    //Contains_pump
    searchParams.delete("next[104]")

    //Thickness
    searchParams.delete("next[105]")

    //Grip
    searchParams.delete("next[106]")

    //Playing_level
    searchParams.delete("next[107]")

    //Strung_type
    searchParams.delete("next[108]")

    //Cover_type
    searchParams.delete("next[109]")

    //Grip_size
    searchParams.delete("next[110]")

    //Head_size
    searchParams.delete("next[111]")

     //Speed
    searchParams.delete("next[112]")

    //Willow_type
    searchParams.delete("next[113]")

    //Bat_grade
    searchParams.delete("next[114]")

    //Cover
    searchParams.delete("next[115]")

    //Visor
    searchParams.delete("next[116]")

    //Bails_included
    searchParams.delete("next[117]")

    //Fill_type
    searchParams.delete("next[118]")

    //Tyre_size
    searchParams.delete("next[119]")

    //Gear_type
    searchParams.delete("next[120]")

    //Rear_brake
    searchParams.delete("next[121]")

    //Front_brake
    searchParams.delete("next[122]")

     //Playback_mode
    searchParams.delete("next[123]")

    //Accessory_holder
    searchParams.delete("next[124]")

    //Rod_power
    searchParams.delete("next[125]")

    //Rod_type
    searchParams.delete("next[126]")

    //Rod_action
    searchParams.delete("next[127]")

    //Handle_material
    searchParams.delete("next[128]")

    //Construction
    searchParams.delete("next[129]")

    //Drag_type
    searchParams.delete("next[130]")

    //Container_type
    searchParams.delete("next[131]")

    //Edge_type
    searchParams.delete("next[132]")

    //Sheath
    searchParams.delete("next[133]")

     //Coated
    searchParams.delete("next[134]")

    //Finish
    searchParams.delete("next[135]")

    //Attachment_type
    searchParams.delete("next[136]")

    //Auto_locking
    searchParams.delete("next[137]")

    //Tray_included
    searchParams.delete("next[138]")

    //Magnetic
    searchParams.delete("next[139]")

    //Diary_type
    searchParams.delete("next[140]")

    //Steam_burst
    searchParams.delete("next[141]")

    //Spray
    searchParams.delete("next[142]")

    //Power_consumption
    searchParams.delete("next[143]")

    //Rated_pressure
    searchParams.delete("next[144]")

     //Star_rating
    searchParams.delete("next[145]")

    //Filter_type
    searchParams.delete("next[146]")

    //Auto_revolving_heater
    searchParams.delete("next[147]")

    //Number_of_stitches
    searchParams.delete("next[148]")

    //Number_of_blades
    searchParams.delete("next[149]")

    //Load_type
    searchParams.delete("next[150]")

    //Number_of_ways
    searchParams.delete("next[151]")

    //Wired_or_wireless
    searchParams.delete("next[152]")

    //Energy_ratings
    searchParams.delete("next[153]")

    //Condenser_coil
    searchParams.delete("next[154]")

    //Ideal_for
    searchParams.delete("next[155]")

     //Technology
    searchParams.delete("next[156]")

    //Defrosting_type
    searchParams.delete("next[157]")

    //Year
    searchParams.delete("next[158]")

    //Star
    searchParams.delete("next[159]")

    //Bee_rating
    searchParams.delete("next[160]")

    //Washing_system
    searchParams.delete("next[161]")

    //Power
    searchParams.delete("next[162]")

    //Control
    searchParams.delete("next[163]")

    //Ductless
    searchParams.delete("next[164]")

    //Auto_clean
    searchParams.delete("next[165]")

    //Cups
    searchParams.delete("next[166]")

     //Number_of_eggs
    searchParams.delete("next[167]")

    //Number_of_slices
    searchParams.delete("next[168]")

    //Screen_size
    searchParams.delete("next[169]")

    //Operating_system
    searchParams.delete("next[170]")

    //Hard_disk_capacity
    searchParams.delete("next[171]")

    //Storage_type
    searchParams.delete("next[172]")

    //Processor
    searchParams.delete("next[173]")

    //Processor_brand
    searchParams.delete("next[174]")

    //Processor_gen
    searchParams.delete("next[175]")

    //RAM_type
    searchParams.delete("next[176]")

    //RAM
    searchParams.delete("next[177]")

     //Graphics
    searchParams.delete("next[178]")

    //Graphics_name
    searchParams.delete("next[179]")

    //Graphics_processor_series
    searchParams.delete("next[180]")

    //Graphics_memory_type
    searchParams.delete("next[181]")

    //Touch_screen
    searchParams.delete("next[182]")

    //Interface
    searchParams.delete("next[183]")

    //Water_proof
    searchParams.delete("next[184]")

    //Operation_type
    searchParams.delete("next[185]")

    //Number_of_cells
    searchParams.delete("next[186]")

    //Compatible_laptop_size
    searchParams.delete("next[187]")

    //Ergonomic
    searchParams.delete("next[188]")

     //Illuminated_keys
    searchParams.delete("next[189]")

    //Shock_resistance
    searchParams.delete("next[190]")

    //Wireless_speed
    searchParams.delete("next[191]")

    //Number_of_Ethernet_ports
    searchParams.delete("next[192]")

    //Transfer_speed
    searchParams.delete("next[193]")

    //Voice_support
    searchParams.delete("next[194]")

    //Memory_capacity
    searchParams.delete("next[195]")

    //Max_wireless_transmission_rate
    searchParams.delete("next[196]")

    //Frequency_band
    searchParams.delete("next[197]")

    //Compatibility
    searchParams.delete("next[198]")

    //Frequency
    searchParams.delete("next[199]")

     //Number_of_USB_ports
    searchParams.delete("next[200]")

    //Antennae
    searchParams.delete("next[201]")

    //GST_invoice
    searchParams.delete("next[202]")

    //Offers
    searchParams.delete("next[203]")

    //Printer_type
    searchParams.delete("next[204]")

    //Scanner_type
    searchParams.delete("next[205]")

    //Printer_output
    searchParams.delete("next[206]")

    //Refilling_type
    searchParams.delete("next[207]")

    //Function
    searchParams.delete("next[208]")

    //Portable
    searchParams.delete("next[209]")

    //Device_chipset
    searchParams.delete("next[210]")

     //Lamp_life
    searchParams.delete("next[211]")

    //Brightness
    searchParams.delete("next[212]")

    //Edition
    searchParams.delete("next[213]")

    //Architecture
    searchParams.delete("next[214]")

    //Board
    searchParams.delete("next[215]")

    //Class
    searchParams.delete("next[216]")

    //Subject
    searchParams.delete("next[217]")

    //Validity
    searchParams.delete("next[218]")

    //Screen_resolution
    searchParams.delete("next[219]")

    //Screen_form_factor
    searchParams.delete("next[220]")

    //Inbuilt_speaker
    searchParams.delete("next[221]")

     //Panel_type
    searchParams.delete("next[222]")

    //Panel_type
    searchParams.delete("next[223]")

    //Response_time
    searchParams.delete("next[224]")

    //Fan_diameter
    searchParams.delete("next[225]")

    //Max_fan_speed
    searchParams.delete("next[226]")

    //Number_of_satacables
    searchParams.delete("next[227]")

    //Power_output
    searchParams.delete("next[228]")

    //Number_of_cores
    searchParams.delete("next[229]")

    //Processor_speed
    searchParams.delete("next[230]")

    //Data_rate
    searchParams.delete("next[231]")

    //Device
    searchParams.delete("next[232]")

     //Chipset
    searchParams.delete("next[233]")

    //Clock_speed
    searchParams.delete("next[234]")

    //Number_of_HDMI_ports
    searchParams.delete("next[235]")

    //Configuration
    searchParams.delete("next[236]")

    //Smart_tv
    searchParams.delete("next[237]")

    //Screen_type
    searchParams.delete("next[238]")

    //Curve_tv
    searchParams.delete("next[239]")

    //Internal_storage
    searchParams.delete("next[240]")

    //Battery_capacity
    searchParams.delete("next[241]")

    //Network_type
    searchParams.delete("next[242]")

    //SIM_type
    searchParams.delete("next[243]")

     //Primary_camera
    searchParams.delete("next[244]")

    //Secondary_camera
    searchParams.delete("next[245]")

    //Operating_system_name
    searchParams.delete("next[246]")

    //Speciality
    searchParams.delete("next[247]")

    //Voice_calling
    searchParams.delete("next[248]")

    //Battery_type
    searchParams.delete("next[249]")

    //Syncing_method
    searchParams.delete("next[250]")

    //Wireless_standard
    searchParams.delete("next[251]")

    //Indicator
    searchParams.delete("next[252]")

    //Compatible_mobile
    searchParams.delete("next[253]")

    //Extension
    searchParams.delete("next[254]")

    //Movement
    searchParams.delete("next[255]")

    //Fixture_type
    searchParams.delete("next[256]")

    //Installation_type
    searchParams.delete("next[257]")

    //Sweep_diameter
    searchParams.delete("next[258]")

    //Phase
    searchParams.delete("next[259]")

    //Number_of_poles
    searchParams.delete("next[260]")

    //Flammable
    searchParams.delete("next[261]")

    //Sensor_type
    searchParams.delete("next[262]")

    //Effective_pixels
    searchParams.delete("next[263]")

    //Maximum_load_capacity
    searchParams.delete("next[264]")

    //Prime_Zoom
    searchParams.delete("next[265]")

    //Focal_length
    searchParams.delete("next[266]")

    //Lens_type
    searchParams.delete("next[267]")

    //Max_aperture
    searchParams.delete("next[268]")

    //Lens_mount
    searchParams.delete("next[269]")

    //Max_magnification
    searchParams.delete("next[270]")

    //Mount_tracking
    searchParams.delete("next[271]")

    //Placement_type
    searchParams.delete("next[272]")

    //Male_thread_diameter
    searchParams.delete("next[273]")

    //Female_thread_diameter
    searchParams.delete("next[274]")

    //Vehicle_brand
    searchParams.delete("next[275]")

    //Vehicle_model
    searchParams.delete("next[276]")

    //Number_of_indicator_lamps
    searchParams.delete("next[277]")

    //Tachometer
    searchParams.delete("next[278]")

    //Armours
    searchParams.delete("next[279]")

    //Platform
    searchParams.delete("next[280]")

    //PEGI_rating
    searchParams.delete("next[281]")

    //Game_modes
    searchParams.delete("next[282]")

    //ESRB_rating
    searchParams.delete("next[283]")

    //Temple_material
    searchParams.delete("next[284]")

    //Lens_type_supported
    searchParams.delete("next[285]")

    //Temple_color
    searchParams.delete("next[286]")





    window.location.search = searchParams.toString();
                             }
}
