import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Settings, Users, LogOut } from "lucide-react";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-16 flex flex-col items-center bg-white shadow-md py-4 justify-between">
      <div>
        <div className="h-10 w-10 flex items-center justify-center">
          <img src="/logo.jpg" alt="Logo" className="h-full w-full object-contain" />
        </div>
        <div className="mt-6 space-y-6">
          <Users className="h-6 w-6 text-gray-500 hover:text-purple-600 cursor-pointer" />
          <Settings className="h-6 w-6 text-gray-500 hover:text-purple-600 cursor-pointer" />
        </div>
      </div>
      <div className="mb-6">
        <LogOut className="h-6 w-6 text-gray-500 hover:text-purple-600 cursor-pointer" />
      </div>
    </div>
  );
}

function PlanCard({ name, price, features }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm">{feature}</span>
            <Switch className="data-[state=checked]:bg-violet-600" />
          </div>
        ))}
      </div>
      {price && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm">Pricing</span>
            <span className="rounded-md border border-purple-400 px-6 py-2 text-sm text-purple-600">
              {price}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function SubscriptionPlans() {
  const features = ["Broadcasting", "CTWA", "Chatbot", "Catalogue", "Broadcasting"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 container mx-auto px-4 py-8 ml-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Customers</h1>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">Create Plan</Button>
        </div>

        <Tabs defaultValue="subscription" className="mb-8">
          <TabsList>
            <TabsTrigger value="rates" className="data-[state=active]:border-b-2 data-[state=active]:border-violet-600 data-[state=active]:text-violet-600">Rates</TabsTrigger>
            <TabsTrigger value="subscription" className="data-[state=active]:border-b-2 data-[state=active]:border-violet-600 data-[state=active]:text-violet-600">Subscription</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PlanCard name="Basic Plan" price="2499" features={features} />
          <PlanCard name="Growth Plan" price="3499" features={features} />
          <PlanCard name="Advance Plan" price="4499" features={features} />
          <PlanCard name="VIP Plan 1" price="5299" features={features} />
          <PlanCard name="Basic Plan" price="3299" features={features} />
        </div>
      </div>
    </div>
  );
}