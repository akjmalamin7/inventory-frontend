import { Container } from "@/components/comon/container";
import PageHeader from "@/components/comon/pageHeader";
import CustomerList from "@/components/pages/customer/customerList";
import { Card } from "@/shared/ui/card";

const Customer = () => {
  return (
    <Container size="md">
      <PageHeader pageTitle="Customer List" />
      <Card>
        <Card.Body padding="lg">
          <Card overflow="hidden" card_style="bordered">
            <Card.Body padding="none">
              <CustomerList />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Customer;
