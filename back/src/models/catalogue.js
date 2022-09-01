userid
catalogue: {
   id:,
    title: { type: String, default: "New catalogue" },
    items: [
      {
        _idItem: {
          type: mongoose.Schema.Types.ObjectId,
          index: true,
          required: true,
          auto: true,
        },
        description: String,
        image: { type: String, required: true },
      },
    ],
    activeCatalogue: { type: Boolean, default: false },
  },
  country: { type: String, default: "" },
  lastUpdate: { type: Date, default: Date.now }