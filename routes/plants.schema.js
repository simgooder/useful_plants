var mongoose = require('mongoose');

var Schema = mongoose.Schema;


// Plant ID -----------------------

var PlantIdSchema = new Schema({

    name: String,

    scientificName: String,
    
    commonNames: [String],
    
    images: [String],
    
    references: [String],

    summary: String,

    growth_habit: {
        type: String,
        enum: ['perennial', 'annual']
    },

    habitat: {
        hardinessZone: {
            type: Number,
            min: 0,
            max: 12
        },
        regions: [String],
        habitat: String
    },

    description: {

        leaves: {
            shape: String,
            color: String,
            habit: {
                type: String,
                enum: ['deciduous', 'evergreen']
            }
        },

        flowers: String,

        seeds: String,

        profile: {
            type: String,
            enum: ['shrub', 'tree', 'groundcover', 'vine']
        }
    },

    references: [String]

})

var PlantId = mongoose.model("PlantID", PlantIdSchema);


// Plant Uses -----------------------

var PlantUsesSchema = new Schema({

    edible: {
        potential: Boolean,
        notes: [String]
    },

    wildcraft: {
        potential: Boolean,
        notes: [String]
    },
    
    medicinal: {
        potential: Boolean,
        notes: [String]
    },

    agricultural: {
        potential: Boolean,
        notes: [String]
    },

    animalHabitat: {
        potential: Boolean,
        notes: [String]
    }

})

var PlantUses = mongoose.model("PlantUses", PlantUsesSchema);


// Plant Care -----------------------

var PlantCareSchema = new Schema({

    plantingSchedule: String,

    daysToMaturity: Number,

    caringInstructions: String,

    germination: String,

    nutritionalNeeds: String, // needs loads of N, or P, or K

    soilPH: {
        type: Number,
        min: 0,
        max: 9
    },

    light: {
        type: String,
        enum: ['shade', 'low light', 'partial sun', 'full sun']
    },

    moisture: {
        type: String,
        enum: ['drought tolerant', 'low moisture', 'high moisture', 'wet feet']
    }

})

var PlantCare = mongoose.model("PlantCare", PlantCareSchema);



// Warnings -----------------------

var PlantWarningsSchema = new Schema({

    poisonous: Boolean,

    invasive: Boolean,

    enemies: [String]

})

var PlantWarnings = mongoose.model("PlantWarnings", PlantWarningsSchema);


// Related -----------------------

var PlantRelatedSchema = new Schema({

    companions: [], // plants that are beneficial when planted together

    primitiveVariety: [], // The original parent

    parentVarieties: [], //  Known parents

    childVarieties: [], // Child varieties of the parent (landraces, crosses)

    siblingVarieties: [] // Related varities that aren't parent nor child

})

var PlantRelated = mongoose.model("PlantRelated", PlantRelatedSchema);


// Export the Schema!
module.exports = plantsSchema;